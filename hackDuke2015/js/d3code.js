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

        var circles = g.selectAll(".poverty").data(data);

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
        .text("poverty rate  (years) [1980-2003]");

    svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 8)
        .attr("x", -cHeight/2)
    .attr("dy", ".81em")
    .attr("transform", "rotate(-90)")
    .text("population in poverty (%)");

    $('svg circle').tipsy({ 
        gravity: 'w', 
        html: true, 
        title: function() {
          var d = this.__data__;
          return d.rate + '%'; 
        }
      });

});

d3.json("client/data.json", function(err, info) {
        var svg = d3.select("#minimumWage");

        var data = info.minimumWage;
        console.log(data);

 var margin = {top: 40, right: 40, bottom: 40, left:40},
            width = 600,
            cHeight = 500;

        var maxRate = d3.max(data, function(d) { return d.adjusted_2015 } );

    var minRate = d3.min(data, function(d) { return d.adjusted_2015});

        var xScale = d3.time.scale()
        .domain([new Date(data[0].year), d3.time.year.offset(new Date(data[data.length - 1].year), 1)])
                .rangeRound([0, width - margin.left - margin.right]);

       var yScale = d3.scale.linear()
          .domain([minRate,maxRate])
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

        var g = svg.append("g").attr("transform", "translate(76, 29)");

        var circles = g.selectAll(".minWage").data(data);

        circles.enter()
        .append("circle")
        .attr({
          cx:function(d,i){return 0},
          cy:function(d,i){return yScale(d.adjusted_2015)},
          r: 1,
          fill:'#35b025'
        }).transition().delay(50).duration(1000).attr({
          cx:function(d,i){return 20 * i},
            cy:function(d,i){return yScale(d.adjusted_2015)},
           r: 9,
           fill:'#c4d22c'  
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
        .text("minimum wage (adjusted us dollars for 2015/time) [1980-2003]");

        svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 8)
            .attr("x", -cHeight/2)
        .attr("dy", ".81em")
        .attr("transform", "rotate(-90)")
        .text("");

        $('svg circle').tipsy({ 
            gravity: 'w', 
            html: true, 
            title: function() {
              var d = this.__data__;
              return '$' + d.adjusted_2015; 
            }
          });

});


