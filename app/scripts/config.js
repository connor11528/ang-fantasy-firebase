'use strict';

// routes
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/default.html',
        controller: 'DefaultCtrl'
      })
      .when('/signin', {
		  templateUrl: 'views/users/signin.html',
		  controller: 'AuthCtrl'
	  })
	  .when('/signup', {
		  templateUrl: 'views/users/signup.html',
		  controller: 'AuthCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  }]);

// firebase URL
app.constant('FBURL', 'https://angfantasy.firebaseio.com');
