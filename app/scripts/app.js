'use strict';

var app = angular.module('angFantFire', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'firebase',
    'ngRoute',
]);

// bootstrap so you don't have to use <body ng-app='angFantFire'>
angular.element(document).ready(function(){
	app;
	angular.bootstrap(document, ['angFantFire']);
})
