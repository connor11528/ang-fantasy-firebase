'use strict';

app.controller('SignupCtrl', ['$scope', 'Login', '$location',
    function($scope, Login, $location) {

      $scope.$on('angularFireAuth:login', function () {
        $location.path('/');
      })

      $scope.err = null;

      $scope.login = function(callback) {
        $scope.err = null;
        Login.login($scope.email, $scope.pass, '/', function(err, user) {
          $scope.err = err||null;
          typeof(callback) === 'function' && callback(err, user);
        });
      };

      $scope.createAccount = function() {
        if( !$scope.email ) {
          $scope.err = 'Please enter an email address';
        }
        else if( !$scope.pass ) {
          $scope.err = 'Please enter a password';
        }
        else {
          Login.createAccount($scope.name, $scope.email, $scope.pass, function(err, user) {
            if( err ) {
              $scope.err = err;
            }
            else {
              $scope.login(function(err) {
                if( !err ) {
                  Login.createProfile(user.id, $scope.name, user.email);
                }
              });
            }
          });
        }
      };

      if(!!$scope.auth) 
        $location.path('/');

      $scope.$on('angularFireAuth:login', function(){
        $location.path('/');
      })

    }]);