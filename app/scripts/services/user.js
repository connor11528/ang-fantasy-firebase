'use strict';

app.factory('User', ['Auth', '$firebase', 'FBURL',
	function(Auth, $firebase, FBURL){
	var ref = new Firebase(FBURL).child('users');	// create object to hold all user info
	
	var users = $firebase(ref);	// firebase 'users' collection
	
	var User = {
		create: function(authUser, username){
			users[username] = {
				md5_hash: authUser.md5_hash,
				username: username,
				$priority: authUser.uid
			};
			
			users.$save(username);	// save to database
		}
	};
	return User;
}]);
