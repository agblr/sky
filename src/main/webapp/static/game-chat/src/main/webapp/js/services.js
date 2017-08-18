angular.module('starter.services', [])

    .factory('$req', function ($http, $q, myConstants, $window) {
        function method(m, url, data) {
            var rq = {
                method: m,
                url: myConstants.IS_APP ? myConstants.BASE_URL : '' + url
            };
            if (data) {
                if ('GET' == m) {
                    rq.params = data;
                } else {
                    rq.data = data;
                }
            }
            var uid = $window.localStorage.getItem('uid');
            var accessToken = $window.localStorage.getItem('accessToken');
            rq.headers = {
                'x-access-token': accessToken,
                'x-access-uid': uid
            };
            var deferred = $q.defer();
            $http(rq).then(function (data) {
                deferred.resolve(data.data);    //成功直接处理数据
            }, function (data) {
                deferred.reject(data);          //不超过则需要查看http请求状态和异常信息
            });
            return deferred.promise;
        }

        return {
            get: function (url, params) {
                return method('GET', url, params);
            },
            post: function (url, data) {
                return method('POST', url, data);
            }
        }
    })

    .factory('Auth', function ($req, $window, $rootScope) {
        return {
            isSignIn: function (callback) {
                callback = callback || function () {};
                if ($rootScope.user != null && $rootScope.user != undefined) {
                    callback($rootScope.user);
                    return;
                }
                var uid = localStorage.uid;
                if (!uid) {
                    callback();
                    return;
                }
                this.getUser(uid).then(function (res) {
                    if (res.code == 200) {
                        $rootScope.user = res.body;
                        callback($rootScope.user);
                    } else {
                        $req.post('/thirdparty/login/auto', {
                            uid: user.uid,
                            username: user.username,
                            accessToken: user.accessToken,
                            inWeixin: typeof WeixinJSBridge != 'undefined'
                        }).then(function (res) {
                            if (res.code == 200) {
                                $rootScope.user = res.body;
                                callback(res.body.id);
                            } else {
                                callback();
                            }
                        });
                    }
                });
            },
            getUser: function (uid) {
                return $req.get('/user/' + uid);
            },
            login: function (data) {
                localStorage.removeItem('uid');
                localStorage.removeItem('username');
                localStorage.removeItem('accessToken');
                return $req.post('/login', data);
            },
            logout: function () {
                localStorage.removeItem('uid');
                localStorage.removeItem('username');
                localStorage.removeItem('accessToken');
                return $req.post('/user/logout');
            },
            register: function (data) {
                return $req.post('/register', data);
            }
        };
    })

    .factory('UserService', function ($req, $window, $rootScope, $timeout) {
        return {
            update: function (data) {
                return $req.post('/user/update', data);
            },
            transfer: function (data) {
                return $req.post('/user/transfer', data);
            },
            updatePsw: function (data) {
                return $req.post('/user/updatePsw', data);
            },
            sendSmsCode: function (data) {
                return $req.post('/user/sendSmsCode', data);
            },
            bindMobile: function (data) {
                return $req.post('/user/bindMobile', data);
            },
            getLottery: function () {
                return $req.get('/user/myLottery');
            },
            getLotteryDetails: function (pageNo, pageSize) {
                return $req.get('/user/myLottery', {pageNo: pageNo, pageSize: pageSize});
            },
            getBonusDetails: function (pageNo, pageSize) {
                return $req.get('/user/myBonus', {pageNo: pageNo, pageSize: pageSize});
            },
            getRoomHistory: function () {
                return $req.get('/user/roomHistory');
            },
            getBalance: function () {
                return $req.get('/user/balance');
            },
            applyRoom: function (data) {
                return $req.post('/user/roomApply', data);
            },
            getRoomCount: function () {
                return $req.get('/user/roomCount');
            },
            getRooms: function (pageNo, pageSize) {
                return $req.get('/user/rooms', {pageNo: pageNo, pageSize: pageSize});
            }
        };
    })

    .factory('configService', function ($req) {
        var lotteryDescription = '恭喜发财,大吉大利!';
        var appTitle = "疯狂的红包";
        var lotteryMaxNumber = 100;
        var lotteryMaxMoney = 200;
        var lotteryUnit = "美金";
        return {
            getLotteryDescription: function () {
                return lotteryDescription;
            },
            getLotteryMaxNumber: function () {
                return lotteryMaxNumber;
            },
            getLotteryMaxMoney: function () {
                return lotteryMaxMoney;
            },
            getAppTitle: function () {
                return appTitle;
            },
            getLotteryUnit: function () {
                return lotteryUnit;
            },
            getDic: function (dic) {
                return $req.get('/' + dic + '.dc');
            }
        };
    })

    .factory('Rooms', function ($req, $timeout, $ionicLoading, configService) {
        return {
            updateRooms: function ($scope, delay, filter) {
                $ionicLoading.show({
                    template: '<ion-spinner icon="bubbles"></ion-spinner>'
                });
                var url = '/room/list/' + $scope.pageNo;
                $req.get(url, filter).then(function (res) {
                    if (200 == res.code) {
                        $timeout(function () {
                            var rooms = res.body.concat($scope.rooms);
                            var gameTypes = {};
                            if (rooms && rooms.length) {
                                for (var i = 0; i < rooms.length; i++) {
                                    var cat = gameTypes[rooms[i].type];
                                    if (cat) {
                                        cat.push(rooms[i]);
                                    } else {
                                        cat = [rooms[i]];
                                        gameTypes[rooms[i].type] = cat;
                                    }
                                }
                            }
                            $scope.rooms = gameTypes;
                            $ionicLoading.hide();
                        }, delay);
                    }
                }).finally(function () {
                    $scope.$broadcast('scroll.refreshComplete');
                });
            },
            get: function (roomId) {
                return $req.get('/room/join/' + roomId);
            },
            getCata: function () {
                return configService.getDic('dic.chat.roomCata');
            },
            getProps: function (roomId) {
                return $req.get('/room/props', {roomId: roomId});
            },
            getTotalOnlineCount: function () {
                return $req.get('/totalOnlineCount');
            }
        };
    })

    .factory('roomMessageService', function ($rootScope, Auth, $ionicPopup, $location, $ionicScrollDelegate, $state, $timeout) {
        return {
            process: function (data, $scope, ws) {
                var type = data.type;
                switch (type) {
                    case 'ORD':
                        this.processCMD(data, $scope, ws);
                        break;
                    case 'RED':
                        this.processLottery(data, $scope);
                        break;
                    case 'TXT':
                        this.processTxt(data, $scope);
                        break;
                    case 'TXT_SYS':
                        this.processSysTxt(data, $scope);
                        break;
                    case 'TXT_ALERT':
                        this.processAlertText(data, $scope);
                    case 'PC_MSG':
                        this.processAlertText(data, $scope);
                }
            },

        };
    })

    .factory('lottery', function ($req) {
        return {}
    })

    .factory('webSocketService', function ($ionicPopup) {
        var ws, uri = 'chat';
        return {
            create: function (listener) {
                this.close();
                if ('WebSocket' in window) {
                    ws = new WebSocket("ws://" + window.location.host + "/" + uri);
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '您的浏览器不支持,请更新到现代浏览器.'
                    });
                }
                ws.onopen = listener.onOpen;
                ws.onmessage = listener.onMessage;
                ws.onclose = listener.onClose;
                ws.onerror = listener.onerror;
                return ws;
            },
            close: function () {
                if (ws) {
                    ws.close();
                }
                ws = null;
            }
        };
    })

    .factory('Pay', function ($req, $window) {
        return {
            payChannels: ['ALI_WAP', 'UN_WEB', 'BD_WAP', 'JD_WAP', 'KUAIQIAN_WAP', 'YEE_WAP'],
            apply: function (index, totalFee) {
                $req.post('pay/apply', {
                    payChannel: this.payChannels[index],
                    totalFee: totalFee
                }).then(function (res) {
                    console.log(res)
                });
            },

            applyWx: function (totalFee) {
                $req.post('pay/apply/wx', {
                    payChannel: 'WX_JSAPI',
                    totalFee: totalFee
                }).then(function (res) {
                    if (res.code == 200) {
                        $window.location.href = res.body;
                    }
                });
            }
        };
    })

    .factory('ThirdPartyLogin', function ($req, $window) {
        return {
            apply: function (type, extras) {
                localStorage.removeItem('uid');
                localStorage.removeItem('username');
                localStorage.removeItem('accessToken');
                $req.post('thirdparty/login/apply', {
                    type: type,
                    extras: extras
                }).then(function (res) {
                    if (res.code == 200) {
                        $window.location.href = res.body;
                    }
                });
            }
        }
    })

    .factory('Account', function ($req) {
        return {
            getBankCards: function () {
                return $req.get('/user/bankRecords');
            },

            getRechargeRecords: function (page, pageSize) {
                return $req.get('/user/rechargeRecords', {pageSize: pageSize, pageNo: page});
            },

            getWithdrawRecords: function (page, pageSize) {
                return $req.get('/user/withdrawRecords', {pageSize: pageSize, pageNo: page});
            },

            withdraw: function (data) {
                return $req.post('/user/withdraw', data);
            }
        };
    })
;
