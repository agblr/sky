// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

    //此处为全局的变量
    .constant('myConstants', {
        'IS_APP': false,
        'BASE_URL': 'http://127.0.0.1:9001'
    })

    .run(function ($ionicPlatform, $rootScope, Auth, $state, webSocketService, Rooms, $ionicPopup, $timeout) {
        $ionicPlatform.ready(function () {
            // $rootScope.backButtonIcon = $ionicConfigProvider.backButton.icon();
            if ($ionicPlatform.is('ios')) {
                $rootScope.platform = 'ios';
            } else if ($ionicPlatform.is('android')) {
                $rootScope.platform = 'android';
            }
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
        //$rootScope.$on('$locationChangeStart', function (e, next, current) {
        //
        //});
        //$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        //
        //});
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name == 'login' || toState.name == 'register') {
                var targetScope = event.targetScope;
                targetScope.fromState = fromState;
                targetScope.fromParams = fromParams;
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.rooms', {
                url: '/rooms',
                views: {
                    'tab-rooms': {
                        templateUrl: 'templates/tab-rooms.html',
                        controller: 'RoomsCtrl'
                    }
                }
            })

            .state('tab.room-detail', {
                url: '/rooms/:roomId',
                cache: false,
                views: {
                    'tab-rooms': {
                        templateUrl: 'templates/room-detail.html',
                        controller: 'RoomDetailCtrl'
                    }
                }
            })

            .state('tab.history', {
                url: '/history',
                views: {
                    'tab-history': {
                        templateUrl: 'templates/tab-history.html',
                        controller: 'HistoryCtrl'
                    }
                }
            })

            .state('tab.create', {
                url: '/create',
                views: {
                    'tab-create': {
                        templateUrl: 'templates/tab-create.html',
                        controller: 'CreateCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-rechargeAndWithdraw', {
                url: '/account/rechargeAndWithdraw',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-recharge-withdraw.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-manager', {
                url: '/account/manager',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-manager.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-manager-updateName', {
                url: '/account/manager-updateName',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-manager-updateName.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-transfer', {
                url: '/account/manager-transfer',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-manager-transfer.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-manager-updatePhone', {
                url: '/account/manager-updatePhone',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-manager-updatePhone.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-manager-updatePhone-confirm', {
                url: '/account/manager-updatePhone-confirm',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-manager-updatePhone-confirm.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-manager-updatePsw', {
                url: '/account/manager-updatePsw',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-manager-updatePsw.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.account-lottery-detail', {
                url: '/account/lottery-detail',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-lottery-detail.html',
                        controller: 'AccountLotteryCtrl'
                    }
                }
            })
            .state('tab.account-bonus-detail', {
                url: '/account/bonus-detail',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account-bonus-detail.html',
                        controller: 'AccountBonusCtrl'
                    }
                }
            })

            .state('tab.account-recharge', {
                url: '/account/recharge',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/recharge.html',
                        controller: 'RechargeCtrl'
                    }
                }
            })

            .state('tab.account-rooms', {
                url: '/account/rooms',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/room-list.html',
                        controller: 'UserRoomsCtrl'
                    }
                }
            })

            .state('tab.account-room-props', {
                url: '/account/room-props/:roomId',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/room-props.html',
                        controller: 'UserRoomPropsCtrl'
                    }
                }
            })

            .state('tab.account-cards', {
                url: '/account/cards',
                params: {target: null},
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/bank-cards.html',
                        controller: 'BankCardsCtrl'
                    }
                }
            })
            
            .state('tab.account-recharge-history', {
                url: '/account/recharge-history',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/recharge-history.html',
                        controller: 'RechargeHistoryCtrl'
                    }
                }
            })

            .state('tab.account-withdraw-history', {
                url: '/account/withdraw-history',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/withdraw-history.html',
                        controller: 'WithdrawHistoryCtrl'
                    }
                }
            })

            .state('tab.account-withdraw', {
                url: '/account/withdraw',
                params: {bankName: null, branch: null, ownerName: null, account: null, mobile: null},
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/withdraw.html',
                        controller: 'WithdrawCtrl'
                    }
                }
            })
            
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            })

        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/rooms');

    });
