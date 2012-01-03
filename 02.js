var x = 150;
var y = 150;
var dx = 4;
var dy = 5;
var ctx;

function init() {
  ctx = $('#canvas')[0].getContext("2d");
  return setInterval(draw, 10);
}

function draw() {
  ctx.clearRect(0,0,300,300);
  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  x += dx;
  y += dy;
}

init();