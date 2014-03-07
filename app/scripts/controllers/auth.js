'use strict';

app.controller('AuthCtrl', function($scope, Auth, $location){
	if (Auth.signedIn()){
		// if they're already authenticated we don't want them on signin or signup pages
		$location.path('/');
	}
	
	// event fired on hard page load if user is successfully authenticated
	$scope.$on('firebaseSimpleLogin:login', function(){
		$location.path('/');
	});
	
	// authenticate new user
	$scope.signUp = function(){
		Auth.signUp($scope.user)
			.then(function(authUser){
				console.log('You successfully signed up! User: ' + JSON.stringify(authUser));
				$location.path('/')
			}, function(err){
				$scope.error = err.toString()
			});
	};
	
	// authenticate existing user
	$scope.signIn = function(){
		Auth.signIn($scope.user)
			.then(function(){
				$location.path('/');
			}, function(err){
				$scope.error = err.toString();
			});
	};
})
