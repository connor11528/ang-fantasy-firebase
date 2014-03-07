'use strict';

app.controller('DefaultCtrl', function ($scope, FBURL, $firebase) {
	$scope.default = 'Hi I\'m default';
	var ref = new Firebase(FBURL);
	$scope.messages = $firebase(ref);
});

// navbar controller
app.controller('NavCtrl', function($scope, Auth, $location){
	$scope.logout = function(){
		Auth.logout();	
		$location.path('/');		
	};	
});
