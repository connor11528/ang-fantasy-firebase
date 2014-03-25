'use strict';

app.controller('SigninCtrl', ['$scope', '$location', 'Login',
    function($scope, $location, Login) {

      $scope.$on('angularFireAuth:login', function () {
        $location.path('/');
      })

      $scope.email = null;
      $scope.pass = null;
      $scope.name = null;

      $scope.login = function(callback) {
        $scope.err = null;
        Login.login($scope.email, $scope.pass, '/', function(err, user) {
          $scope.err = err||null;
          typeof(callback) === 'function' && callback(err, user);
        });
      };

      if(!!$scope.auth)
        $location.path('/');

      $scope.$on('angularFireAuth:login', function(){
        $location.path('/');
      })
}])
  