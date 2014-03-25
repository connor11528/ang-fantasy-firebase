'use strict';

app.controller('DefaultCtrl', ["$scope", "FBURL", "$firebase", function ($scope, FBURL, $firebase) {
	$scope.default = 'Hi I\'m default';
}]);

// navbar controller
app.controller('NavCtrl', ["$scope", "Auth", "$location", 
	function($scope, Auth, $location){
	
	$scope.logout = function(){
		Auth.logout();	
		$location.path('/');		
	};	
}]);
