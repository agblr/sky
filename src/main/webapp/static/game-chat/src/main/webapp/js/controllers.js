angular.module('starter.controllers', [])

    .controller('HistoryCtrl', function () {

    })

    .controller('CreateCtrl', function ($scope, $ionicPopup, UserService) {
        $scope.data = {};

        $scope.applyRoom = function () {
            if (!$scope.data.name || !$scope.data.mobile) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '姓名和联系电话都不能为空, 请填写完整后再提交'
                });
                return;
            }
            UserService.applyRoom($scope.data).then(function (res) {
                if (res.code == 200) {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '开房申请提交失败: ' + res.msg
                    });
                }
            });
        }
    })

    // .controller('leftMenu', function ($rootScope, $scope, configService) {
    //     configService.getDic('dic.chat.roomCata').then(function (res) {
    //         $scope.cata = res;
    //     });
    //     configService.getDic('dic.chat.gameType').then(function (res) {
    //         $scope.type = res;
    //     });
    //     $scope.filterRooms = function (filter) {
    //         $rootScope.roomsFilter = filter;
    //     };
    // })

//    .controller('RoomsCtrl', function ($rootScope, $scope, Rooms, $state, configService, $ionicSideMenuDelegate, $ionicPopup) {
//        $scope.$on('$ionicView.beforeEnter', function () {
//            configService.getDic('dic.chat.gameType').then(function (res) {
//                $scope.gameTypes = res;
//            });
//            $rootScope.hideTabs = false;
//            Rooms.getTotalOnlineCount().then(function (res) {
//                if (res.code == 200) {
//                    $scope.onlineCount = res.body;
//                } else {
//                    $scope.onlineCount = 0;
//                }
//            });
//        });
//        
//        $scope.appTitle = configService.getAppTitle();
//        $scope.rooms = [];
//        $scope.pageNo = 1;
//
//        Rooms.updateRooms($scope, 0, '');
//
//        $scope.doRefresh = function () {
//            Rooms.updateRooms($scope, 800, $rootScope.roomsFilter);
//        };
//        
//        $scope.gameTypeHideStatus = {};
//        $scope.collapseRoomGroup = function (gameType) {
//            $scope.gameTypeHideStatus[gameType] = !$scope.gameTypeHideStatus[gameType];
//        };
//
//        $scope.join = function (roomId) {
//            Rooms.get(roomId).then(function (res) {
//                if (200 == res.code) {
//                    $rootScope.room = res.body.room;
//                    $state.go('tab.room-detail', {roomId: roomId});
//                } else {
//                    $ionicPopup.alert({
//                        title: '提示',
//                        template: res.msg
//                    });
//                }
//            });
//        };
//
//        $scope.toggleLeft = function () {
//            $ionicSideMenuDelegate.toggleLeft();
//        };
//
//        $rootScope.$watch('roomsFilter', function (nv) {
//            if (nv !== undefined) {
//                $scope.rooms = [];
//                $scope.pageNo = 1;
//                Rooms.updateRooms($scope, 800, nv);
//            }
//        });
//    })

    .controller('RoomDetailCtrl', function ($rootScope, $scope, $ionicScrollDelegate, $stateParams, $ionicPopup, $ionicPopover, $state, $ionicModal, $ionicActionSheet, $timeout, configService, UserService, Rooms, webSocketService, Auth) {
        var ws;
        $scope.$on('$ionicView.beforeEnter', function () {
            if (!$rootScope.room || $rootScope.room.id != $stateParams.roomId) {
                Auth.isSignIn(function(user) {
                    Rooms.get($stateParams.roomId).then(function (res) {
                        if (200 == res.code) {
                            $rootScope.room = res.body.room;
                            $scope.isGameBegin = $rootScope.room.status == '1';
                            $timeout(function () {
                                $state.go('tab.room-detail', {roomId: $stateParams.roomId}, {reload: true});
                            }, 300);
                        } else {
                            $ionicPopup.alert({
                                title: '提示',
                                template: res.msg
                            });
                        }
                    });
                });
                return false;
            } else {
                $scope.isGameBegin = $rootScope.room.status == '1';
            }
            ws = webSocketService.create({onMessage: $scope.onMessage});
        });
        $scope.$on('$ionicView.beforeLeave', function () {
            webSocketService.close();
        });
        $scope.alert = {};
        $scope.messages = [];
        $scope.pcMessages = [];
        $scope.visibleMessages = [];
        $scope.hold = false;
        $scope.scrollToEnd = true;

        $scope.toggleHistory = function () {
            $scope.historyListShow = !$scope.historyListShow;
        };

        $scope.onMessage = function (event) {
            var data = JSON.parse(event.data);
            var type = data.type;
            $scope.$apply(function () {
                switch (type) {
                    case 'ORD':
                        $scope.processCMD(data);
                        break;
                    case 'RED_SYS':
                    case 'RED':
                        $scope.processLottery(data);
                        break;
                    case 'TXT':
                        $scope.processTxt(data);
                        break;
                    case 'TXT_SYS':
                        $scope.processSysTxt(data);
                        break;
                    case 'TXT_ALERT':
                        $scope.processAlertText(data);
                        break;
                }
            });
        };

        var showLoginDialog = function (content) {
            $ionicPopup.confirm({
                title: '提示',
                template: content || '注册用户才可以发言和参与游戏',
                scope: $scope,
                buttons: [
                    {text: '注册', type: 'button-default', onTap: function () {
                        return 0;
                    }},
                    {text: '登录', type: 'button-positive', onTap: function () {
                        return 1;
                    }},
                    {text: '<div class="close">+</div>', type: 'login-dlg-close', onTap: function () {
                        return 2;
                    }}
                ]
            }).then(function (res) {
                if (res == 1) {
                    webSocketService.close();
                    $state.go('login');
                } else if (res == 0) {
                    webSocketService.close();
                    $state.go('register');
                }
            });
        };

        $scope.processCMD = function (data) {
            var cmd = data.cmd;
            var content = data.content;
            switch (cmd) {
                case 'notLogin':
                    showLoginDialog(content);
                    break;
                case 'alert':
                    if ($scope.lotteryOpenPopover.isShown()) {
                        $timeout(function () {
                            $scope.closeLottery();
                            $ionicPopup.alert({
                                title: '提示',
                                template: content
                            });
                        }, 600);
                    } else {
                        $ionicPopup.alert({
                            title: '提示',
                            template: content
                        });
                    }
                    break;
                case 'showLotteryDetail':
                    $scope.detail = content;
                    $scope.closeLottery();
                    $scope.detailModal.show();
                    break;
                case 'showRoomMembers':
                    $scope.members = content;
                    $scope.membersModal.show();
                    break;
                case 'lotteryOpenSuccess':
                    $scope.lotteries[content].opened = 1;
                    $timeout(function () {
                        $scope.opening = false;
                        $scope.openDetailModal(content);
                    }, 600);
                    break;
                case 'lotteryOpenFailed':
                    $scope.opening = false;
                    $scope.lotteryOpenPopover.hide();
                    break;
                case 'lotteryCanOpen':
                    $scope.openLotteryOpenPopover();
                    break;
                case 'lotteryHasOpened':
                    $scope.lotteries[content].opened = 1;
                    $scope.openDetailModal(content);
                    break;
                case 'lotteryExpired':
                case 'lotteryFinished':
                    $timeout(function () {
                        $scope.lotteries[content].opened = 1;
                        $scope.lotteryOpenPopover.hide();
                        $scope.opening = false;
                        $scope.openTooSlowPopover();
                    }, 600);
                    break;
                case 'gameBegin':
                    $scope.isGameBegin = true;
                    // $rootScope.room.status = '1';
                    break;
                case 'gameOver':
                    $scope.isGameBegin = false;
                    // $rootScope.room.status = '0';
                    break;
            }
        };

        $scope.processLottery = function (data) {
            var uid = $scope.user ? $scope.user.id : undefined;
            if (uid === data.sender) {
                $scope.closeModal();
            }
            data.lottery = true;
            $scope.lotteries[data.content.id] = data;
            var details = data.content.detail;
            if (details && details[uid]) {
                $scope.lotteries[data.content.id].opened = 1;
            }
            $scope.processTxt(data);
        };

        $scope.processTxt = function (data) {
            var uid = $scope.user ? $scope.user.id : undefined;
            data.showAvatar = true;
            if (uid === data.sender) {
                data.align = 'right';
                data.style = 'self';
            } else {
                data.align = 'left';
            }
            this.pushMessage(data);
        };

        $scope.processSysTxt = function (data) {
            data.showAvatar = false;
            data.align = 'center';
            data.style = 'notice';
            this.pushMessage(data);
        };

        $scope.processAlertText = function (data) {
            $scope.alert.content = data.content;
            $scope.alert.hide = false;
            if ($scope.alert.hideTimeout) {
                $timeout.cancel($scope.alert.hideTimeout);
            }
            var setActive = function () {
                $scope.alert.active = true;
                $scope.alert.activeTimeout = $timeout(function () {
                    $scope.alert.activeTimeout = null;
                    $scope.alert.active = false;
                }, 1000);
            };
            if ($scope.alert.active) {
                if ($scope.alert.activeTimeout === undefined) {
                    $scope.alert.active = false;
                    setActive();
                }
            } else {
                setActive();
            }
            $scope.alert.hide = true;
            $scope.alert.hideTimeout = $timeout(function () {
                $scope.alert.content = undefined;
                $scope.alert.hideTimeout = undefined;
            }, 8000);
        };

        $scope.processPCMessage = function (data) {
            $scope.pcMessages.push(data);
            if ($scope.pcMessages.length > 10) {  //超过150条记录 就删除前面50条消息
                $scope.pcMessages.splice(0, 10);
            }
        };

        var scrollDelegate = $ionicScrollDelegate.$getByHandle('mainScroll');
        $scope.pushMessage = function (data) {
            $scope.messages.push(data);
            if ($scope.messages.length > 150) {  //超过150条记录 就删除前面50条消息
                $scope.messages.splice(0, 50);
            }
            if ($scope.scrollToEnd) {
                if ($scope.visibleMessages.length >= 30) {
                    $scope.visibleMessages.splice(0, $scope.visibleMessages.length - 15);
                    $timeout(function () {
                        scrollDelegate.scrollBottom(false);
                    }, 0);
                    $timeout(function () {
                        if (!$scope.visibleMessages.length || $scope.visibleMessages[$scope.visibleMessages.length - 1].msgId != data.msgId) {
                            $scope.visibleMessages.push(data);
                            scrollDelegate.scrollBottom(true);
                        }
                    }, 200);
                } else {
                    if (!$scope.visibleMessages.length || $scope.visibleMessages[$scope.visibleMessages.length - 1].msgId != data.msgId) {
                        $scope.visibleMessages.push(data);
                    }
                    $timeout(function () {
                        scrollDelegate.scrollBottom(true);
                    }, 0);
                }
            }
        };

        $scope.scrollComplete = function () {
            if ($scope.hold) {
                return;
            }
            $scope.scrollToEnd = scrollDelegate.getScrollPosition().top == scrollDelegate.getScrollView().__maxScrollTop;
            if ($scope.scrollToEnd) {
                var vlm = $scope.visibleMessages.length ? $scope.visibleMessages[$scope.visibleMessages.length - 1].msgId : undefined;
                var lm = $scope.messages.length ? $scope.messages[$scope.messages.length - 1].msgId : undefined;
                if (vlm != lm) {
                    var start = $scope.messages.length >= 16 ? $scope.messages.length - 16 : 0;
                    $scope.visibleMessages = $scope.messages.slice(start);
                    $timeout(function () {
                        scrollDelegate.scrollBottom(true);
                    }, 0);
                }
            }
        };
        $scope.onHold = function () {
            $scope.hold = true;
            $scope.scrollToEnd = false;
        };
        $scope.onRelease = function () {
            $scope.hold = false;
        };

        $scope.loadMoreMessages = function () {
            if (!$scope.messages.length) {
                $scope.$broadcast('scroll.refreshComplete');
                return;
            }
            var oh = scrollDelegate.getScrollView().__contentHeight;
            var vlm = $scope.visibleMessages[0].msgId;
            for (var j = $scope.messages.length - 1; j > 0; j--) {
                if ($scope.messages[j].msgId == vlm) {
                    var end = j >= 16 ? j - 16 : 0;
                    for (var i = j - 1; i >= end; i--) {
                        $scope.visibleMessages.unshift($scope.messages[i]);
                    }
                    break;
                }
            }
            $scope.$broadcast('scroll.refreshComplete');
            scrollDelegate.resize();
            $timeout(function () {
                var nh = scrollDelegate.getScrollView().__contentHeight;
                if (nh - oh >= 50) {
                    scrollDelegate.scrollTo(0, nh - oh - 50, false);
                }
            }, 0);
        };

        $scope.lotteries = {};
        $scope.data = {
            money: '',
            number: '',
            description: '',
            moneyLed: '0.00'
        };
        $scope.btnDisabled = true;
        $scope.lotteryDescription = configService.getLotteryDescription();
        $scope.moneyReady = false;
        $scope.numberReady = false;
        $scope.appTitle = configService.getAppTitle();
        $scope.lotteryUnit = configService.getLotteryUnit();
        $scope.handUp = function () {
            if (!$scope.isGameBegin && $scope.user && $scope.user.id) {
                this.send(2, 'handsUpCmd', null);
            }
        };

        $scope.openRoomMenu = function ($event) {
            var target = $event.target;
            var btns = target.offsetParent;
            var height = btns.offsetHeight;
            var width = btns.offsetWidth;
            var left = btns.offsetLeft;
            var top = btns.offsetTop;

            $scope.menuStyle = {left: left - 200 + width + 'px', top: top + height + 'px'};
            $scope.menuMaskStyle = {display: 'block'};
            UserService.getBalance().then(function (res) {
                if (res.code == 200) {
                    var b = res.body;
                    if (/^(-?\d+)(\.\d+)?$/.test(b)) {
                        b = b.toFixed(2).replace('.00', '');
                    }
                    $scope.balance = b;
                }
            });
        };
        $scope.closeRoomMenu = function () {
            $scope.menuMaskStyle = {display: 'none'};
            $scope.balance = '...';
        };
        $scope.gotoAccount = function () {
            webSocketService.close();
            $state.go('tab.rooms').then(function () {
                $rootScope.tabAnimation = true;
                $state.go('tab.account');
            });
        };
        $scope.numberFilter = function (e) {
            if (e.keyCode == 46 || e.keyCode == 9 || e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 39) {
                e.returnValue = true;
                return;
            }
            if (e.keyCode == 190 || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
                var money = $scope.data.money;
                var index = money.toString().indexOf('.');
                if (e.keyCode == 190 && index > -1) {
                    e.returnValue = false;
                    return;
                }
                if (index > -1 && index < (money.length - 2)) {
                    e.returnValue = false;
                    return;
                }
                e.returnValue = true;
            } else
                e.returnValue = false;
        };

        $scope.$watch('data.money', function (nv, ov, scope) {
            var money = parseFloat(nv);
            if (!isNaN(money)) {
                if (money > configService.getLotteryMaxMoney()) {
                    money = configService.getLotteryMaxMoney();
                }
                scope.data.money = money;
                scope.data.moneyLed = money.toFixed(2);
                scope.moneyReady = true;
                if (scope.moneyReady && scope.numberReady) {
                    scope.btnDisabled = false;
                }
            } else {
                scope.data.moneyLed = '0.00';
                scope.btnDisabled = true;
                scope.moneyReady = false;
            }
        });

        $scope.$watch('data.number', function (nv, ov, scope) {
            var number = parseInt(nv);
            if (!isNaN(number)) {
                if (number > configService.getLotteryMaxNumber()) {
                    number = configService.getLotteryMaxNumber();
                }
                scope.data.number = number;
                scope.numberReady = true;
                if (scope.moneyReady && scope.numberReady) {
                    scope.btnDisabled = false;
                }
            } else {
                scope.data.number = '';
                scope.btnDisabled = true;
                scope.numberReady = false;
            }
        });

        $scope.openLottery = function (lotteryId) {
            if (1 == $scope.lotteries[lotteryId].opened) {
                this.openDetailModal(lotteryId);
                return;
            }
            $scope.lottery = $scope.lotteries[lotteryId];
            this.send(2, 'checkLotteryStatusCmd', {lotteryId: lotteryId});
        };

        $scope.realOpenLottery = function (lotteryId) {
            if (1 == $scope.lotteries[lotteryId].opened) {
                return;
            }
            $scope.opening = true;
            this.send(2, 'openLotteryCmd', {lotteryId: lotteryId});
        };

        $scope.closeLottery = function () {
            if ($scope.tooSlowPopover) {
                $scope.tooSlowPopover.hide();
            }
            if ($scope.lotteryOpenPopover) {
                $scope.lotteryOpenPopover.hide();
            }
        };

        $ionicModal.fromTemplateUrl('templates/room-lottery.html', {
            scope: $scope,
            animation: 'slide-in-up',
            focusFirstInput: true
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/room-lottery-detail.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.detailModal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/room-desc.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.roomDescModal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/room-members.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.membersModal = modal;
        });

        $ionicPopover.fromTemplateUrl('templates/room-member-detail.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;
        });
        $ionicPopover.fromTemplateUrl('templates/room-member-detail.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover1 = popover;
        });
        $ionicPopover.fromTemplateUrl('templates/room-lottery-open.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.lotteryOpenPopover = popover;
        });
        $ionicPopover.fromTemplateUrl('templates/room-lottery-too-slow.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.tooSlowPopover = popover;
        });
        $scope.openLotteryOpenPopover = function ($event) {
            $scope.opening = false;
            $scope.lotteryOpenPopover.show($event);
        };
        $scope.openTooSlowPopover = function ($event) {
            $scope.tooSlowPopover.show($event);
        };

        $scope.openPopover = function ($event, member, inner) {
            $scope.member = member;
            if (inner) {
                $scope.popover1.show($event);
            } else
                $scope.popover.show($event);
        };

        $scope.openModal = function () {
            Auth.isSignIn(function (user) {
                if (!user) {
                    showLoginDialog();
                } else {
                    if ($scope.room.type == 'G03') {
                        $scope.touzhuPadShow = true;
                        $scope.currentTouzhuPad = 'c';
                    } else {
                        $scope.data = {
                            money: '',
                            number: '',
                            description: '',
                            moneyLed: '0.00'
                        };
                        $scope.modal.show();
                    }
                }
            });
        };

        $scope.calculateAmount = function (index) {
            switch (index) {
                case 0:
                    $scope.amount = $scope.inputSelected ? 50 : '';
                    break;
                case 1:
                    $scope.amount = $scope.inputSelected ? 100 : 10;
                    break;
                case 2:
                    $scope.amount = $scope.inputSelected ? 200 :
                        (!$scope.amount || $scope.amount < 20) ? 20 : ($scope.amount * 2 > 20000 ? 20000 : $scope.amount * 2);
                    break;
            }
        };

        $scope.hideTouzhuPad = function () {
            $scope.touzhuPadShow = false;
            $scope.currentTouzhuPad = 'c';
        };

        $scope.switchToLeft = function () {
            $scope.currentTouzhuPad = 'l';
        };

        $scope.switchToCenter = function () {
            $scope.currentTouzhuPad = 'c';
        };

        $scope.switchToRight = function () {
            $scope.currentTouzhuPad = 'r';
        };

        $scope.closeModal = function () {
            if ($scope.modal) {
                $scope.modal.hide();
            }
        };

        $scope.openMembersModal = function () {
            this.send(2, 'showRoomMembersCmd', null);
        };

        $scope.openDescModal = function () {
            $scope.roomDescModal.show();
        };

        $scope.closeMembersModal = function () {
            $scope.membersModal.hide();
        };

        $scope.closeDescModal = function () {
            $scope.roomDescModal.hide();
        };

        $scope.openDetailModal = function (lotteryId) {
            this.send(2, 'showLotteryDetailCmd', {lotteryId: lotteryId});
            this.closeLottery();
        };

        $scope.closeDetailModal = function () {
            $scope.detailModal.hide();
        };

        $scope.$on('$destroy', function () {
            $scope.modal.remove();
            $scope.membersModal.remove();
            $scope.roomDescModal.remove();
            $scope.detailModal.remove();
            $scope.popover.remove();
            $scope.popover1.remove();
            $scope.lotteryOpenPopover.remove();
            $scope.tooSlowPopover.remove();
        });

        $scope.showAdvancedButtons = function () {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '<b>Share</b> This'},
                    {text: 'Move'}
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    console.log(index);
                    return true;
                },
                destructiveButtonClicked: function (e) {
                    console.log(e);
                }
            });

            $timeout(function () {
                hideSheet();
            }, 2000);
        };

        $scope.send = function (flag, cmd, data) {
            if (ws && 1 == ws.readyState) {
                if (1 == flag) {
                    ws.send(JSON.stringify({content: $scope.data, type: 'RED'}));
                    //this.closeModal();
                } else if (2 == flag) {
                    ws.send(JSON.stringify({cmd: cmd, content: data, type: 'ORD'}));
                } else {
                    Auth.isSignIn(function (user) {
                        if (user) {
                            if ($scope.content) {
                                ws.send(JSON.stringify({content: $scope.content}));
                                $scope.content = '';
                            }
                        } else {
                            showLoginDialog();
                        }
                    });
                }
            } else {
                webSocketService.close();
                $ionicPopup.alert({
                    title: '提示',
                    template: '与房间链接已断开,请重新进入.'
                });
                $state.go('tab.rooms');
            }
        };

        $scope.keyEnter = function (e) {
            if (e.keyCode == 13) {
                $scope.send();
            }
        };

        $scope.back = function () {
            $ionicPopup.confirm({
                title: '提示',
                template: '确定退出房间?',
                okText: '是',
                okType: 'button-green',
                cancelText: '否'
            }).then(function (res) {
                if (res) {
                    webSocketService.close();
                    $state.go('tab.rooms');
                }
            });
        };

        // $scope.toggleEmojiBoard = function () {
        //     $scope.emojiOpen = !$scope.emojiOpen;
        //     $timeout(function () {
        //         scrollDelegate.scrollBottom(true);
        //     }, 100);
        // };
        //
        // var getUnicodeCharacter = function (cp) {
        //     if (cp >= 0 && cp <= 0xD7FF || cp >= 0xE000 && cp <= 0xFFFF) {
        //         return String.fromCharCode(cp);
        //     } else if (cp >= 0x10000 && cp <= 0x10FFFF) {
        //         cp -= 0x10000;
        //         var first = ((0xffc00 & cp) >> 10) + 0xD800
        //         var second = (0x3ff & cp) + 0xDC00;
        //         return String.fromCharCode(first) + String.fromCharCode(second);
        //     }
        // };
        //
        // $scope.emojiList = [];
        // for (var i = 1; i < 80; i++) {
        //     $scope.emojiList.push(getUnicodeCharacter(0x1f600 + i));
        // }
        // for (var j = 0; j < 17; j++) {
        //     $scope.emojiList.push(getUnicodeCharacter(0x1f440 + j));
        // }
        // $scope.insertEmoji = function (emoji) {
        //     if (!$scope.content) {
        //         $scope.content = emoji;
        //         return;
        //     }
        //
        //     var ctrl = document.getElementById('chatMsgInput');
        //     if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        //         var caretPos = ctrl.selectionStart;
        //         var content = $scope.content;
        //         $scope.content = content.substr(0, caretPos) + emoji + content.substr(caretPos);
        //
        //         if(ctrl.setSelectionRange) {
        //             ctrl.focus();
        //             ctrl.setSelectionRange(caretPos, caretPos + 1);
        //         } else if (ctrl.createTextRange) {
        //             var range = ctrl.createTextRange();
        //             range.collapse(true);
        //             range.moveEnd('character', caretPos);
        //             range.moveStart('character', caretPos);
        //             range.select();
        //             console.log('===')
        //         }
        //     }
        // };
        //
        // $scope.closeEmojiBoard = function ($event) {
        //     if ($scope.emojiOpen) {
        //         $scope.emojiOpen = false;
        //         $event.preventDefault();
        //     }
        // };
    }).filter('trustHtml', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }])

    .controller('AccountLotteryCtrl', function ($scope, UserService) {
        $scope.records = [];
        $scope.page = 1;
        $scope.doRefresh = function () {
            $scope.page = 1;
            UserService.getLotteryDetails($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    $scope.records = res.body;
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.noMoreItemsAvailable = false;
        $scope.loadMore = function () {
            UserService.getLotteryDetails($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    if (res.body && res.body.length > 0) {
                        $scope.records = $scope.records.concat(res.body);
                        $scope.page++;
                    }
                    if (!res.body || res.body.length < 20) {
                        $scope.noMoreItemsAvailable = true;
                    }
                } else {
                    $scope.noMoreItemsAvailable = true;
                }
            }).catch(function () {
                $scope.noMoreItemsAvailable = true;
            });
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    })

    .controller('AccountBonusCtrl', function ($scope, UserService) {
        $scope.records = [];
        $scope.page = 1;
        $scope.doRefresh = function () {
            $scope.page = 1;
            UserService.getBonusDetails($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    $scope.records = res.body;
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.noMoreItemsAvailable = false;
        $scope.loadMore = function () {
            UserService.getBonusDetails($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    if (res.body && res.body.length > 0) {
                        $scope.records = $scope.records.concat(res.body);
                        $scope.page++;
                    }
                    if (!res.body || res.body.length < 20) {
                        $scope.noMoreItemsAvailable = true;
                    }
                } else {
                    $scope.noMoreItemsAvailable = true;
                }
            }).catch(function () {
                $scope.noMoreItemsAvailable = true;
            });
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    })

    .controller('AccountCtrl', function ($scope, $state, $stateParams, Auth, $window, UserService, $rootScope, $ionicPopup) {
        $scope.$on('$ionicView.beforeEnter', function () {
            UserService.getBalance().then(function (res) {
                if (res.code == 200) {
                    var b = res.body;
                    if (/^(-?\d+)(\.\d+)?$/.test(b)) {
                        b = b.toFixed(2).replace('.00', '');
                    }
                    if (!$rootScope.user) {
                        $rootScope.$watch('user', function (nv) {
                            if (nv) {
                                nv.money = b;
                            }
                        });
                    } else {
                        $rootScope.user.money = b;
                    }
                }
            });
            if ($scope.roomCount == undefined || $scope.roomCount == null) {
                UserService.getRoomCount().then(function (res) {
                    if (res.code == 200) {
                        $scope.roomCount = res.body;
                    }
                });
            }
        });
        $scope.updateName = function (nickName) {
            UserService.update({id: $rootScope.user.id, nickName: nickName}).then(function (res) {
                if (200 == res.code) {
                    $rootScope.user.nickName = nickName;
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                    $state.go('tab.account-manager');
                }
            });
        };

        $scope.transfer = function (userId,money) {
            UserService.transfer({userId: userId, money: money}).then(function (res) {
                if (200 == res.code) {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                    $state.go('tab.account');
                }else{
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                }
            });
        };

        $scope.updatePsw = function (oldPwd, newPwd, confirmPwd) {
            UserService.updatePsw({
                id: $rootScope.user.id,
                oldPwd: oldPwd,
                newPwd: newPwd,
                confirmPwd: confirmPwd
            }).then(function (res) {
                if (200 == res.code) {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                    $state.go('tab.account-manager');
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                }
            });
        };

        $scope.sendSmsCode = function (mobile) {
            UserService.sendSmsCode({id: $rootScope.user.id, mobile: mobile}).then(function (res) {
                if (200 == res.code) {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '短信发送成功,请输入验证码!'
                    });
                    $scope.mobile = mobile;
                    $state.go('tab.account-manager-updatePhone-confirm');
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                }
            });
        };

        $scope.bindMobile = function (smsCode) {
            UserService.bindMobile({id: $rootScope.user.id, smsCode: smsCode, mobile: $scope.mobile}).then(function (res) {
                if (200 == res.code) {
                    $rootScope.user.mobile = $scope.mobile;
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                    $state.go('tab.account-manager');
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                }
            });
        };

        $scope.logout = function () {
            $ionicPopup.confirm({
                title: '请确认',
                template: '确定退出当前登录账号?',
                okText: '是',
                okType: 'button-green',
                cancelText: '否'
            }).then(function (ok) {
                if (ok) {
                    Auth.logout().then(function (res) {
                        if (res.code == 200) {
                            $rootScope.user = undefined;
                            $state.go('tab.rooms');
                        }
                    });
                }
            });
        }
    })

    .controller('UserRoomsCtrl', function ($scope, UserService) {
        $scope.$on('$ionicView.beforeEnter', function () {
            $scope.doRefresh();
        });

        $scope.doRefresh = function () {
            $scope.page = 1;
            UserService.getRooms($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    $scope.rooms = res.body;
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };
    })

    .controller('UserRoomPropsCtrl', function ($scope, $stateParams, Rooms) {
        $scope.$on('$ionicView.beforeEnter', function () {
            Rooms.getProps($stateParams.roomId).then(function (res) {
                if (res.code == 200) {
                    $scope.props = res.body.props;
                    $scope.room = res.body.room;
                }
            });
        });
    })

    .controller('BankCardsCtrl', function ($scope, $state, $stateParams, Account) {
        $scope.$on('$ionicView.beforeEnter', function () {
            $scope.forWithdraw = $stateParams.target == 'tab.account-withdraw';
            $scope.refreshCards();
        });

        $scope.refreshCards = function () {
            Account.getBankCards().then(function (res) {
                if (res.code == 200) {
                    if (!res.body || res.body.length == 0) {
                        if ($scope.forWithdraw) {
                            $state.go('tab.account-withdraw');
                            return;
                        }
                    }
                    $scope.cards = res.body;
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.gotoWithdraw = function (card) {
            if (!$scope.forWithdraw) {
                return;
            }
            var params = {
                bankName: card.bankName,
                branch: card.branch,
                ownerName: card.name,
                account: card.account,
                mobile: card.mobile
            };
            $state.go('tab.account-withdraw', params);
        };
    })

    .controller('RechargeHistoryCtrl', function ($scope, Account) {
        $scope.records = [];
        $scope.page = 1;

        $scope.doRefresh = function () {
            $scope.page = 1;
            Account.getRechargeRecords($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    $scope.records = res.body;
                }
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.noMoreItemsAvailable = false;
        $scope.loadMore = function () {
            Account.getRechargeRecords($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    if (res.body && res.body.length > 0) {
                        $scope.records = $scope.records.concat(res.body);
                        $scope.page++;
                    }
                    if (!res.body || res.body.length < 20) {
                        $scope.noMoreItemsAvailable = true;
                    }
                } else {
                    $scope.noMoreItemsAvailable = true;
                }
            }).catch(function () {
                $scope.noMoreItemsAvailable = true;
            });
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    })

    .controller('WithdrawHistoryCtrl', function ($scope, Account) {
        $scope.page = 1;
        $scope.records = [];

        $scope.doRefresh = function () {
            if ($scope.loading) {
                return;
            }
            $scope.loading = true;
            $scope.page = 1;
            Account.getWithdrawRecords($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    $scope.records = res.body;
                }
                $scope.loading = false;
            }).finally(function () {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.noMoreItemsAvailable = false;
        $scope.loadMore = function () {
            if ($scope.loading) {
                return;
            }
            $scope.loading = true;
            Account.getWithdrawRecords($scope.page, 20).then(function (res) {
                if (res.code == 200) {
                    if (res.body && res.body.length > 0) {
                        $scope.records = $scope.records.concat(res.body);
                        $scope.page++;
                    }
                    if (!res.body || res.body.length < 20) {
                        $scope.noMoreItemsAvailable = true;
                    }
                } else {
                    $scope.noMoreItemsAvailable = true;
                }
                $scope.loading = false;
            }).catch(function () {
                $scope.noMoreItemsAvailable = true;
            });
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    })

    .controller('RechargeCtrl', function ($scope, $state, $ionicActionSheet, Auth, Pay, $window) {
        var userAgent = $window.navigator.userAgent.toLowerCase();
        // $scope.$on('userIsSignIn', function (e, uid) {
        //     Auth.getUser(uid).then(function (res) {
        //         if (200 == res.code) {
        //             $scope.user = res.body;
        //         }
        //     });
        // });
        $scope.payOrder = {};
        var icons = {
            'ALI_WAP': 'ali',
            'UN_WEB': 'yl',
            'BD_WAP': 'bd',
            'JD_WAP': 'jd',
            'KUAIQIAN_WAP': 'kq',
            'YEE_WAP': 'yb'
        };
        var buttons = [
            {text: '<img src="img/pay/wx.png" class="pay-channel-sel">', className: 'pay-channel-btn'}
        ];
        for (var i = 0; i < Pay.payChannels.length; i++) {
            buttons.push({
                text: '<img src="img/pay/' + icons[Pay.payChannels[i]] + '.png" class="pay-channel-sel">',
                className: 'pay-channel-btn'
            });
        }
        var inwx = false;
        if (/micromessenger/.test(userAgent)) {
            buttons.splice(1, 1);
            inwx = true;
        } else {
            buttons.splice(0, 1);
        }
        $scope.doRecharge = function () {
            $ionicActionSheet.show({
                buttons: buttons,
                titleText: '选择支付方式',
                buttonClicked: function (index) {
                    if (inwx && index == 0) {
                        Pay.applyWx($scope.payOrder.amount);
                    } else {
                        Pay.apply(index, $scope.payOrder.amount);
                    }
                    return true;
                }
            });
        }
    })

    .controller('WithdrawCtrl', function ($scope, $state, $stateParams, $ionicPopup, Account) {
        $scope.$on('$ionicView.beforeEnter', function () {
            if ($stateParams) {
                $scope.withdraw = $stateParams;
            }
        });

        $scope.doWithdraw = function () {
            var w = $scope.withdraw;
            if (!w.bankName || !w.branch || !w.ownerName || !w.account || !w.mobile || !w.money) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '为了确保提现成功, 以上表单信息请务必填写完整后再提交'
                });
                return;
            }
            if (w.money < 50) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '提出金额不得低于50元'
                });
                return;
            }
            Account.withdraw(w).then(function (res) {
                if (res.code == 200) {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '提现申请已成功提交, 系统将在24小时内将款项转入你的银行卡, 请注意查收'
                    }).then(function () {
                        $state.go('tab.account-rechargeAndWithdraw');
                    });
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '提现申请失败: ' + res.msg
                    });
                }
            });
        }
    })

    .controller('LoginCtrl', function ($scope, $state, $ionicPopup, Auth, $rootScope, ThirdPartyLogin) {
        $scope.data = {};
        $scope.doLogin = function () {
            if (!$scope.data.username || !$scope.data.password) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '用户名或者密码不能为空'
                });
                return;
            }
            Auth.login($scope.data).then(function (res) {
                if (200 == res.code) {
                    $rootScope.user = res.body;
                    localStorage.uid = res.body.id;
                    localStorage.username = $scope.data.username;
                    localStorage.accessToken = res.body.accessToken;
                    if ($scope.fromState) {
                        $state.go($scope.fromState.name, $scope.fromParams);
                    } else {
                        $state.go('tab.rooms');
                    }
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                }
            });
        };

        $scope.loginWx = function () {
            var extras = {};
            if ($scope.fromState) {
                extras.fromUrl = $scope.fromState.url;
                if ($scope.fromParams) {
                    extras.fromParams = $scope.fromParams;
                }
            }
            ThirdPartyLogin.apply('wx', extras);
        };
    })

    .controller('RegisterCtrl', function ($scope, $state, $ionicPopup, Auth, $rootScope) {
        $scope.data = {};
        $scope.doRegister = function () {
            if (!$scope.data.username || !$scope.data.password) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '用户名或者密码不能为空'
                });
                return;
            }
            if ($scope.data.password != $scope.data.password_c) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '两次密码输入不一致'
                });
                return;
            }
            Auth.register($scope.data).then(function (res) {
                if (200 == res.code) {
                    $rootScope.user = res.body;
                    if ($scope.fromState) {
                        $state.go($scope.fromState.name, $scope.fromParams);
                    } else {
                        $state.go('tab.rooms');
                    }
                } else {
                    $ionicPopup.alert({
                        title: '提示',
                        template: res.msg
                    });
                }
            });
        }
    })
;
