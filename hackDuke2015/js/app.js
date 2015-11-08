var myApp = angular.module('myApp',[]);

myApp.controller('HomeController', ['$scope', function($scope) {
  $scope.bernie = false;
  $scope.hillary = false;
  $scope.ben = false;
  $scope.rick = false;
  $scope.trump = true;



  $scope.toggleCandidate = function() {
  		$scope.trump = false;
  		$scope.rick = true;
  }
}]);

