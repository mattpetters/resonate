var getTotalSeverity = function(callback) {
	$.getJSON("client/raising_min_wage.json", function(json) {
	    var total_val = 0;
	    for (var key in json) {
			if (json.hasOwnProperty(key)) {
		  		total_val += json[key]["Share_of_this_category_that_is_affected_num"] * json[key]["Percentage_of_the_total_affected_num"];
			}
		}
		callback(total_val);
	});
}

var getSeverityForCategory = function(category, callback) {
	$.getJSON("client/raising_min_wage.json", function(json) {
	    if (json[category]) {
	    	//console.log(category + " : " + json[category]['Share_of_this_category_that_is_affected_num']);
	    	callback(json[category]['Share_of_this_category_that_is_affected_num'] * json[category]['Percentage_of_the_total_affected_num']);
	   	} else {
	   		console.log("error in requested category");
	   	}
	});
}

var getSeverityForCategories = function(categories, callback) {
	var this_total_severity = 0.0;
	var arrayLength = categories.length;
	var numCompleted = 0;
	for (var i = 0; i < arrayLength; i++) {
		getSeverityForCategory(categories[i], function(severity) {
			this_total_severity += severity;
			numCompleted++;
			if (numCompleted == arrayLength) {
				callback(this_total_severity);
			}
		});
	}
}

var updateSeverity = function() {
	var elems = $("button"), count = elems.length;
	var checkedValues = [];
	getTotalSeverity(function(total_severity) {
		elems.each( function(i) {
			if ($(this).hasClass("btn-primary")) checkedValues.push($(this).attr("value"));
			if (!--count) {
				getSeverityForCategories(checkedValues, function(this_total_severity) {
					// console.log("percent: " + percent);s
					console.log(checkedValues);
					var sev = (this_total_severity/total_severity);
					console.log(this_total_severity + " / " + total_severity + " = " + (sev));
					$("#severity_chart_header").text(checkedValues[0] + ", " + checkedValues[2] + "s, " + checkedValues[1] + ", " + checkedValues[3] + " working " + checkedValues[4] + " would receive a Severity ranking of: "  + (sev * 100).toFixed(2));
					updateSeverityD3(sev);
				});
			}
	    });
	});	
}

var updateSeverityD3 =  function(percent) {
	var data = [percent];
	if ($("#severityChart").children().length) {
		
		var val = d3.select("#severityChart").data(data);

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
		var svgContainer = d3.select("#severityChart").data(data)
									.append("svg")
                                    .attr("width", 400)
                                    .attr("height", 30);

		var rect1 = svgContainer.append('rect')
								.attr("id", "rect1")
								.attr("x", 0)
		                        .attr("y", 0)
	                   		    .attr("width", function(d) { return d * 400; })
		                        .attr("height", 30)
		                        .style("fill", barColor);

		var rect2 = svgContainer.append('rect')
								.attr("id", "rect2")
								.attr("x", function(d) { return d * 400;})
								.attr("y", 0)
								.attr("width", function(d) { return (1.0 - d) * 400; })
								.attr("height", 30)
								.style("fill", '#95a5a6');             
	}  
}