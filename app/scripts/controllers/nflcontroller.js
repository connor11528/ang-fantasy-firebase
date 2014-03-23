'use strict';

app.controller('NFLCtrl', ['$scope', '$routeParams', 'NFL', 
	function($scope, $routeParams, NFL){
		$scope.nflteams = NFL.teams;
		$scopre.nflteam = NFL.teams[$routeParams['nflTeamId']];
}])