d3.json("client/data.json", function(err, info) {
        var svg = d3.select("#povertyChart");

        var data = info.povertyRates;
        console.log(data);

        var margin = {top: 40, right: 40, bottom: 40, left:40},
            width = 600,
            cHeight = 500;

        var maxRate = d3.max(data, function(d) { return d.rate } );

        var xScale = d3.time.scale()
        .domain([new Date(data[0].year), d3.time.year.offset(new Date(data[data.length - 1].year), 1)])
                .rangeRound([0, width - margin.left - margin.right]);

       var yScale = d3.scale.linear()
          .domain([11, maxRate])
          .range([cHeight, 0]);

        var xAxis = d3.svg.axis()
          .scale(xScale)
          .orient('bottom')
          .ticks(d3.time.years, 5)
          .tickFormat(d3.time.format('%Y'))
          .tickSize(1.04)
          .tickPadding(11);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left')
        .ticks(6)
        .tickSize(1)
        .tickPadding(1)

        var g = svg.append("g").attr("transform", "translate(95, 50)");

        var circles = g.selectAll("circle").data(data);

        circles.enter()
        .append("circle")
        .attr({
          cx:function(d,i){return 0},
          cy:function(d,i){return yScale(d.rate)},
          r: 1,
          fill:'#35b025'
        }).transition().delay(50).duration(1000).attr({
          cx:function(d,i){return 20 * i},
            cy:function(d,i){return yScale(d.rate)},
           r: 9,
           fill:'#25B0B0'  
          });

        svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(80, ' + (cHeight + 50) + ')')
        .call(xAxis);

        svg.append('g')
        .attr('class','y axis')
        .attr('transform','translate(62, 34)')
        .call(yAxis)

             svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width - width/3.52)
        .attr("y", cHeight + cHeight/5)
        .text("poverty rate,  (years)");

    svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 8)
        .attr("x", -cHeight/2)
    .attr("dy", ".81em")
    .attr("transform", "rotate(-90)")
    .text("population in poverty (%)");

});


// d3.json("client/data.json",function(error,data) {
//   nv.addGraph(function() {
//       var chart = nv.models.linePlusBarChart()
//             .margin({top: 30, right: 60, bottom: 50, left: 70})
//             //We can set x data accessor to use index. Reason? So the bars all appear evenly spaced.
//             .x(function(d,i) { return i })
//             .y(function(d,i) {return d[1] })
//             ;

//       chart.xAxis.tickFormat(function(d) {
//         var dx = data[0].values[d] && data[0].values[d][0] || 0;
//         return d3.time.format('%x')(new Date(dx))
//       });

//       chart.y1Axis
//           .tickFormat(d3.format(',f'));

//       chart.y2Axis
//           .tickFormat(function(d) { return '$' + d3.format(',f')(d) });

//       chart.bars.forceY([0]);

//       d3.select('#chart svg')
//         .datum(data)
//         .transition()
//         .duration(0)
//         .call(chart);

//       nv.utils.windowResize(chart.update);

//       return chart;
//   });

// });