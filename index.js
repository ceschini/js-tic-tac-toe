// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
var player = 1;
// // drawing map
// ctx.lineWidth = 5;
// ctx.moveTo(200, 0);
// ctx.lineTo(200, 600);
// ctx.stroke();
// ctx.moveTo(400, 0);
// ctx.lineTo(400, 600);
// ctx.stroke();
// ctx.moveTo(0, 200);
// ctx.lineTo(600, 200);
// ctx.stroke();
// ctx.moveTo(0, 400);
// ctx.lineTo(600, 400);
// ctx.stroke();

// button function
function btnclick(button) {
  var btn = document.getElementById(button);
  if (player == 1) {
    btn.style.backgroundImage = "url('cross.png')";
    player = 2;
  } else {
    btn.style.backgroundImage = "url('circle.png')";
    player = 1;
  }
}
