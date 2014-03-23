'use strict';

angular.module('angFantFire.controllers.header', ['fantasyApp.services.login'])
  .controller('HeaderController', ['$scope', '$location', 'loginService', 'angularFire', 'FBURL', 
    function($scope, $location, loginService, angularFire, FBURL) {

      $scope.$on("angularFireAuth:login", function() {
        // get user so we can display their name
        angularFire(new Firebase(FBURL + '/users/' + $scope.auth.id), 
          $scope, 'user');
      });

      $scope.logout = function() {
        loginService.logout('/signin');
      };

      $scope.navbarEntries = [

      ];
    }])