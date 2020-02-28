var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// drawing map
ctx.lineWidth = 5;
ctx.moveTo(200, 0);
ctx.lineTo(200, 600);
ctx.stroke();
ctx.moveTo(400, 0);
ctx.lineTo(400, 600);
ctx.stroke();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();
ctx.moveTo(0, 400);
ctx.lineTo(600, 400);
ctx.stroke();

// button function
function b1x1click() {
  var btn = document.getElementById("b1x1");
  btn.style.backgroundImage = "url('cross.png')";
}