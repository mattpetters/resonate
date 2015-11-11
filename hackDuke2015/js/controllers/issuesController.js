myApp.controller('IssuesController', ['$scope', function($scope) {
	//controller for main issues view
	$scope.issues = [
	{"title":"Minimum Wage", "url":"#/minwage"},
	{"title":"Foreign Policy", "url":"#/foreign"},
	{"title":"Global Warming", "url":"#/gwarming"},
	{"title":"Healthcare", "url":"#/healthcare"}
	]
}]);