var myApp = angular.module('myApp',[]);

myApp.controller('HomeController', ['$scope', function($scope) {
	$scope.candidates = [
	{ 	"name": "bernie",
		"bio":"<h4><b>Bernie Sanders</b>, Democrat</h4><br><h5>In late July, he introduced a bill to Congress that will raise the minimum wage to $15 over four years. </h5><br><h5><i>\"I think if you work 40 hours a week, you have a right not to live in poverty. The current federal minimum wage is a starvation wage. It's got to be raised to a living wage.\"</i></h5>",
		"img":"img/bern.jpg"
	}, 
	{	"name": "hillary",
		"bio":" <h4><b>Hillary Clinton</b>, Democrat</h4><br><h5>She supports raising the minimum wage to a national standard of $12, so it doesn't crush smaller economies. Meanwhile, some cities and states like New York and LA may choose to go higher.</h5><br><h5><i>\"Every American deserves a fair shot at success. Fast food & child care workers shouldn't have to march in streets for living wages.\"</i></h5>",
		"img":"img/hilldog.jpg"
	}, 
	{	"name": "ben",
		"bio":" <h4><b>Ben Carson</b>, Republican</h4><br><h5>He would \"probably\" favor raising minimum wage and tying it to economic factors, like inflation, so that it continues to increase yearly at a steady pace.</h5><br><h5><i>\"We should index [the new federal minimum wage] so that we never have to have this conversation again in the history of America.\"</i></h5><br></div> ",
		"img":"img/ben.jpg"
	}, 
	{	"name": "rick",
		"bio":"<h4><b>Rick Santorum</b>, Republican</h4><br><h5>He wants to increase the min wage by just 50 cents over three years. He believes that the Republican party should be concerned about regular people, not just the companies which employ them.</h5><br><h5><i>\"A party that supported bailouts... a party that supports special interest tax provisions for a whole bunch of other businesses. But when it comes to hardworking Americans who are at the bottom of the income scale, we can't provide some level of income support.\"</i></h5>",
		"img":"img/rick.jpg"
	}, 
	{	"name": "trump",
		"bio":"<h4><b>Donald Trump</b>, Republican</h4><br><h5>He is not in favor of raising minimum wage, because he believes American companies would find it harder to compete with businesses abroad.</h5><br><h5><i>\"Having a low minimum wage is not a bad thing for this country. We can't have a situation where our labor is so much more expensive than other countries' that we can no longer win.\"</i></h5></div>",
		"img":"img/trump.jpg"
	}

	];

  $scope.toggleCandidate = function() {

  }

}]);

