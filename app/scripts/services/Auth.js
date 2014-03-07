'use strict';

app.factory('Auth', function($firebaseSimpleLogin, FBURL, $rootScope){
	
	var firebase = new Firebase(FBURL);	// reference our firebase
	
	var auth = $firebaseSimpleLogin(firebase);
	
	var Auth = {
		// takes user obj with email and password properties
		signUp: function(user){
			// $createUser takes an email and password
			// returns a promise that is resolved when the user account has been successfully created
			return auth.$createUser(user.email, user.password);
		},
		signedIn: function(){
			// we'll know someone is signed in 
			// if the user property on the object is not null
			return auth.user !== null;
		},
		signIn: function(user){
			return auth.$login('password', user);	// email/password type of login (not OAuth)
		},
		logout: function(){
			auth.$logout();
		}
	};
	
	// runs function, returns true if user's signed in
	$rootScope.signedIn = function(){
		return Auth.signedIn();
	};
	
	return Auth;
});
