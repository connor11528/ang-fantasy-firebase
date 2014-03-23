'use strict';

// routes
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/default.html',
        controller: 'DefaultCtrl'
      })
      .when('/signin', {
      	templateUrl: 'views/users/signin.html'
      })
      .when('/signup', {
      	templateUrl: 'views/users/signup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

// firebase URL
app.constant('FBURL', 'https://angfantasy.firebaseio.com');

app.run(['angularFireAuth', 'FBURL', '$rootScope',
	function(angularFireAuth, FBURL, $rootScope){
		angularFireAuth.initialize(new Firebase(FBURL), {
			scope: $rootScope,
			name: 'auth',	// user auth object will be $scope.auth when logged in
			path: '/signin'
		});
		$rootScope.FBURL = FBURL;
	}])


