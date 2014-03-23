'use strict';

var app = angular.module('angFantFire', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'firebase',
	'ui.bootstrap',
    'ngRoute',
    'angFantFire.services',
	'angFantFire.controllers'
]);

// bootstrap so you don't have to use <body ng-app='angFantFire'>
angular.element(document).ready(function(){
	app;
	angular.bootstrap(document, ['angFantFire']);
})


// var app = angular.module('fantasyApp',
//   [ 'fantasyApp.config'
//   , 'fantasyApp.controllers.header'
//   , 'fantasyApp.controllers.signin'
//   , 'fantasyApp.controllers.signup'
//   , 'firebase', 'ui.bootstrap', 'ngRoute']
//   )
