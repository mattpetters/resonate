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
		      updateD3(percent);
		    });
		  }
    });
}
var updateD3 =  function(percent) {
	var data = [percent];
	if ($("#chartContainer").children().length) {
		console.log("yo");
		var val = d3.select("#chartContainer").data(data);

		rect1 = val.select("#rect1")
				  .transition()
				  .duration(50)
				  .attr("width", function(d) { return d * 400; });
		rect2 = val.select('#rect2')
				  .transition()
				  .duration(50)
				  .attr("x", function(d) { return d * 400;})
				  .attr("width", function(d) { return (1.0 - d) * 400; })
	} else { //first time
		var svgContainer = d3.select("#chartContainer").data(data)
									.append("svg")
                                    .attr("width", 400)
                                    .attr("height", 30);

		var rect1 = svgContainer.append('rect')
								.attr("id", "rect1")
								.attr("x", 0)
		                        .attr("y", 0)
	                   		    .attr("width", function(d) { return d * 400; })
		                        .attr("height", 30)
		                        .style("fill", "green");

		var rect2 = svgContainer.append('rect')
								.attr("id", "rect2")
								.attr("x", function(d) { return d * 400;})
								.attr("y", 0)
								.attr("width", function(d) { return (1.0 - d) * 400; })
								.attr("height", 30)
								.style("fill", "red");             
	}
	           

	// var rect1Attributes = rect1.attr("x", 0)
	// 	                          .attr("y", 0)
 //                               	  .attr("width", function(d) { return 1,0 - d.percent * 400; })
 //                                  .attr("height", 50)
 //                                  .style("fill", "green");

 //    var rect2Attributes = rect2.attr("x", function(d) { return d.percent * 400; })
	// 	                          .attr("y", 0)
 //                               	  .attr("width", function(d) { return 1.0 - (1.0 - d.percent) * 400; })
 //                                  .attr("height", 50)
 //                                  .style("fill", "red");
}