var c = document.getElementById('game');
var socket = io();
var ctx = c.getContext("2d");

var map = []; // Map is a variable containing a list of all map-objects.
// Map objects have a these paramters:
// id: The object ID.
// x: Location, x value.
// y: Location, y value
// width, height: Defined collision box.

function draw(){
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 50);
}