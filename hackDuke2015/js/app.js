
var myApp = angular.module('myApp',[]);

myApp.controller('HomeController', ['$scope', function($scope) {
	$scope.candidates = [
	{ 	"name": "bernie",
		"bioName":"Bernie Sanders",
		"bioType":"- Democrat",
		"summary":"In late July, he introduced a bill to Congress that will raise the minimum wage to $15.00 over four years.",
		"quote":"\"I think if you work 40 hours a week, you have a right not to live in poverty. The current federal minimum wage is a starvation wage. It's got to be raised to a living wage.\"",
		"img":"img/bern.jpg"
	}, 
	{	"name": "hillary",
		"bioName":"Hillary Clinton",
		"bioType":"- Democrat",
		"summary":"She supports raising the minimum wage to a national standard of $12.00, so the change doesn't crush smaller economies. Meanwhile, some cities and states like LA and New York may choose to go higher.",
		"quote":"\"Every American deserves a fair shot at success. Fast food & child care workers shouldn't have to march in streets for living wages.\"",
		"img":"img/hilldog.jpg"
	}, 
	{	"name": "ben",
		"bioName":"Ben Carson",
		"bioType":"- Republican",
		"summary":"He would \"probably\" favor raising minimum wage and tying it to economic factors, like inflation, so that it continues to increase yearly at a steady pace.",
		"quote":"\"We should index [the new federal minimum wage] so that we never have to have this conversation again in the history of America.\"",
		"img":"img/ben.jpg"
	}, 
	{	"name": "rick",
		"bioName":"Rick Santorum",
		"bioType":"- Republican",
		"summary":"He wants to increase the minimum wage by just 50 cents over three years.",
		"quote":"\"A party that supported bailouts... a party that supports special interest tax provisions for a whole bunch of other businesses. But when it comes to hardworking Americans who are at the bottom of the income scale, we can't provide some level of income support?\"",
		"img":"img/rick.jpg"
	}, 
	{	"name": "trump",
		"bioName":"Donald Trump",
		"bioType":"- Republican",
		"summary":"He is not in favor of raising minimum wage, because he believes American companies would find it harder to compete with businesses abroad.",
		"quote":"\"Having a low minimum wage is not a bad thing for this country. We can't have a situation where our labor is so much more expensive than other countries' that we can no longer win.\"",
		"img":"img/trump.jpg"
	}

	];

  $scope.toggleCandidate = function() {

  }

}]);

