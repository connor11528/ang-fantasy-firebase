'use strict';

app.controller('AuthCtrl', function($scope, $firebaseSimpleLogin, $rootScope, $location, FBURL){
	
	var firebase = new Firebase(FBURL);
	var auth = new FirebaseSimpleLogin(firebase, function(error, user){
		if (user){
			// user is authenticated
			console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
		} else if (error){
			// error while signing in
			console.log('Error: ' + error);
		} else {
			// user is not logged in
			console.log('Not logged in');
		}
	});
		
	$scope.signUp = function(){
		auth.login('facebook', {
			rememberMe: false,
			scope:'email,user_likes,user_birthday'
		});
	};
	
	$scope.logout = function(){
		console.log('logging out..');
		auth.logout();
	};
	
	auth.initialize(firebase, {scope: $rootScope, name: "user"});
	
	$rootScope.isSignedIn = function(){
		return $rootScope.user !== null;
	};
	
	// listen for events
	$rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
		console.log("User " + user.id + " successfully logged in!");
	});
	
	$rootScope.$on("$firebaseAuth:logout", function(evt) {
		console.log("User logged out!");
	});
});
