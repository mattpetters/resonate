d3.json("client/data.json", function(err, info) {
        var svg = d3.select("#povertyChart");

        var data = info.povertyRates;
        console.log(data);

        var cHeight = 500;

        var maxRate = d3.max(data, function(d) { return d.rate } );

        var yScale = d3.scale.linear()
          .domain([11, maxRate])
          .range([cHeight, 0])

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
});