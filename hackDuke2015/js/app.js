
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl:'views/issues.html',
			controller:'IssuesController'
		})
		.when('/minwage', {
			templateUrl:'views/minimumWage.html',
			controller:'MinimumWageController'
		})
		.when('/foreign', {
			templateUrl:'views/foreign.html',
			controller:'ForeignController'
		})
		.when('/gwarming', {
			templateUrl:'views/gwarming.html',
			controller:'GlobalWarmingController'
		})
		.when('/healthcare', {
			templateUrl:'views/healthcare.html',
			controller:'HealthcareController'
		});
});

