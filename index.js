var player = 1;
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
