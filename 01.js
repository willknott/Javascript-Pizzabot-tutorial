//get a reference to the canvas
var ctx = $('#canvas')[0].getContext("2d");

//draw a circle
ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

var rtx = $('#canvas')[0].getContext("2d");


//draw a half circle
//ctx.fillStyle = "#FF1C0A";
//ctx.beginPath();
//ctx.arc(105, 105, 30, 0, Math.PI, true);
//ctx.closePath();
//ctx.fill();

//draw a square
rtx.fillStyle = "rgba(255, 255, 0, .5)"
rtx.beginPath();
rtx.rect(100, 75, 50, 50, true);
rtx.closePath();
rtx.fill();

