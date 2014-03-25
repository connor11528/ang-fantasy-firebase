'use strict';

app.controller('HeaderCtrl', ['$scope', '$location', 'Login', 'angularFire', 'FBURL', 
    function($scope, $location, Login, angularFire, FBURL) {

      $scope.$on("angularFireAuth:login", function() {
        // get user so we can display their name
        angularFire(new Firebase(FBURL + '/users/' + $scope.auth.id), 
          $scope, 'user');
      });

      $scope.logout = function() {
        Login.logout('/signin');
      };

      $scope.navbarEntries = [

      ];
}])