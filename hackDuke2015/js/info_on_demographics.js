var getPercentForCategory = function(category, callback) {
	$.getJSON("client/raising_min_wage.json", function(json) {
	    if (json[category]) {
	    	console.log(category + " : " + json[category]['Share_of_this_category_that_is_affected_num']);
	    	callback(json[category]['Share_of_this_category_that_is_affected_num']);
	   	} else {
	   		console.log("error in requested category");
	   	}
	});
}

var getPercentForCategories = function(categories, callback) {
	var total_percent = 1.0;
	var arrayLength = categories.length;
	var numCompleted = 0;
	for (var i = 0; i < arrayLength; i++) {
		getPercentForCategory(categories[i], function(percent) {
			total_percent *= percent;
			numCompleted++;
			if (numCompleted == arrayLength) {
				callback(total_percent);
			}
		});
	}
}

var updateChart = function() {
	var elems = $("#buttonsToChangeChart").find("button"), count = elems.length;
	var checkedValues = [];
	elems.each( function(i) {
		if ($(this).hasClass("btn-primary")) checkedValues.push($(this).attr("value"));
		  if (!--count) {
		    getPercentForCategories(checkedValues, function(percent) {
		      // console.log("percent: " + percent);s
		      $("#chart_header").text(percent + "% of this category will be affected");
		    });
		  }
    });
}