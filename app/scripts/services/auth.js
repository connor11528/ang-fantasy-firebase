'use strict';

app.factory('Auth', ['$firebaseSimpleLogin', 'FBURL', '$rootScope',
	function($firebaseSimpleLogin, FBURL, $rootScope){
		
	var myUserId = null;
	var firebase = new Firebase(FBURL);
	
	// //Create an Firebase Simple Login client so we can do Facebook auth
	var auth = new FirebaseSimpleLogin(firebase, function(error, user){
		if (user){
			myUserId = user.id;
		} else {
			console.log('Error: ' + error);
		}
	});
	
	var Auth = {
		signUp: function(user){
			return auth.login('facebook', {
				rememberMe: true,
				scope:'email,user_likes,user_birthday'
			});
		},
		logout: function(){
			auth.logout();
		},
		signedIn: function(){
			return auth.uid !== null;
		}
	};
	
	$rootScope.signedIn = function(){
		return Auth.signedIn();
	};
	
	return Auth;
}]);
