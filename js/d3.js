var d3 = require("d3");

var width = parseInt(d3.select("#bankVis").style("width"));
var height = 500;

var svg = d3.select("#bankVis").append("svg")
  .attr("width", width)
	.attr("height", height)

var drag = d3.behavior.drag()
  .origin(function(d) { return d; })
  .on("dragstart", dragstarted)
  .on("drag", dragged)
  .on("dragend", dragended);

function dragstarted(d){
  d3.select(this)
	  .style("opacity", 0.3);
}
function dragged(d) {
//  d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
  d.x = d3.event.x;
	d.y = d3.event.y;
  d3.select(this).attr("transform", "translate(" + [ d.x, d.y ] + ")");
}

function dragended(d){
  d3.select(this)
	  .style("opacity", 1);
}

function Bank(x, y, equity){
  this.x = x;
	this.y = y;
	this.equity = equity;
}


Bank.prototype = {
  constructor: Bank,
	// @input: x coordinate to place the Bank
	//         y coordinate to place the Bank
	//         parent element, the element we will append this svg group to
	//@returns: g element appended to parentElement
  create: function(parentElement){
  var g = parentElement.append("g")
    .attr("transform", "translate(" + this.x + "," + this.y + ")");
  
  g.append("rect")
    .attr("width", 200)
  	.attr("height", 10);
  g.append("rect")
    .attr("width", 180)
  	.attr("height", 10)
  	.attr("transform", "translate(10,-10)");
  g.append("rect")
    .attr("width", 160)
  	.attr("height", 10)
  	.attr("transform", "translate(20,-20)");
  g.append("rect")
    .attr("width", 80)
  	.attr("height", 10)
  	.attr("transform", "translate(40, -100) rotate(90)");
  g.append("rect")
    .attr("width", 80)
  	.attr("height", 10)
  	.attr("transform", "translate(170, -100) rotate(90)");
  g.append("path")
    .attr("d", "M20,-100 L95,-135 L180,-100 Z")
	g.call(drag);
  
  }
};


var mbank = new Bank(width/2, height/2, 1000000);
mbank.create(svg);
var banks = [];
banks.push(mbank);
d3.selectAll('g')
  .data(banks)
  .enter();
