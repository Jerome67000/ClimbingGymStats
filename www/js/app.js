// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'ngResource', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // for french moment.js locales
    moment.locale('fr');
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    // Define the actions of the hardware back button
    $ionicPlatform.registerBackButtonAction(function () {
      switch ($state.current.name) {
        case "start":
        case "tab.home":
        case "tab.scan":
        case "tab.followed":
        case "tab.more":
          ionic.Platform.exitApp();
          break;

        case "room": {
          $state.go('tab.home');
          $ionicHistory.clearHistory();
        } break;
        case "tab.posts":
        case "tab.room-posts":
        case "tab.reviews": {
          $state.go('room');
          $ionicHistory.clearHistory();
        } break;

        default:
          navigator.app.backHistory();
      }
    }, 100);
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Pour avoir la même position de la tab-bar sur toutes les platformes !
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.tabs.position('top');
  // $ionicConfigProvider.backButton.previousTitleText(false).text(' ');
  // $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
  //
  if (ionic.Platform.isAndroid())
    $ionicConfigProvider.scrolling.jsScrolling(false);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // ACCOUNT
  // .state('start', {
  //     url: '/start',
  //     templateUrl: 'partials/page-start.html'
  // })
  //
  // .state('signin', {
  //     url: '/signin',
  //     templateUrl: 'partials/page-signin.html'
  // })
  //
  // .state('create-account', {
  //     url: '/create-account',
  //     templateUrl: 'partials/page-create-account.html'
  // })

  // TABS
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'html/tabs.html'
  })

  .state('tab.sessions', {
    url: '/sessions',
    views: {
      'Seance': {
        templateUrl: 'html/partials/tabs/tab-seances.html'
      }
    }
  })
  // Each tab has its own nav history stack:
  .state('tab.stats', {
    url: '/stats',
    views: {
      'Stats': {
        templateUrl: 'html/partials/tabs/tab-stats.html'
      }
    }
  })
  // Each tab has its own nav history stack:
  .state('tab.events', {
    url: '/events',
    views: {
      'Events': {
        templateUrl: 'html/partials/tabs/tab-events.html'
      }
    }
  })

  .state('signin', {
      url: '/signin',
      templateUrl: 'partials/page-signin.html'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/sessions');

});
