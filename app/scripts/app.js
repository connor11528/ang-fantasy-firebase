'use strict';

var app = angular.module('angFantasyFirebaseApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

// routes
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// firebase URL
app.constant('FBURL', 'https://angfantasy.firebaseio.com');
