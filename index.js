var player = 1;
var x_map = ["z", "z", "z",
             "z", "z", "z",
             "z", "z", "z"];

var o_map = ["z", "z", "z",
             "z", "z", "z",
             "z", "z", "z"];
var moves = 1;
// button function
function btnClick(button) {
  var btn = document.getElementById(button);
  if (player == 1) {
    btn.style.backgroundImage = "url('cross.png')";
    x_map[button] = 'x';
    checkStatus(x_map, moves++);
    player = 2;
  } else {
    btn.style.backgroundImage = "url('circle.png')";
    o_map[button] = 'o';
    checkStatus(o_map, moves++);
    player = 1;
  }
}

function checkStatus(map, moves) {
  switch(map.toString()) {
    // Testing X winner
    case "x,z,x,z,x,z,x,z,z":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "x,z,z,x,z,z,x,x,z":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "x,x,x,z,z,z,z,z,z":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "z,z,z,x,x,x,z,z,z":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "z,z,z,z,z,z,x,x,x":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "x,z,z,x,z,z,x,z,z":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "z,x,z,z,x,z,z,x,z":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "z,z,x,z,z,x,z,z,x":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "x,z,z,z,x,z,z,z,x":
     alert('X ganhou!');
     window.location.reload();
     break;
    case "z,z,x,z,x,z,x,z,z":
     alert('X ganhou!');
     window.location.reload();
     break;
     // Testing O winner
    case "o,o,o,z,z,z,z,z,z":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "z,z,z,o,o,o,z,z,z":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "z,z,z,z,z,z,o,o,o":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "o,z,z,o,z,z,o,z,z":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "z,o,z,z,o,z,z,o,z":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "z,z,o,z,z,o,z,z,o":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "o,z,z,z,o,z,z,z,o":
     alert('O ganhou!');
     window.location.reload();
     break;
    case "z,z,o,z,o,z,o,z,z":
     alert('O ganhou!');
     window.location.reload();
  }
  if (moves == 9) {
    alert('Deu velha!');
    window.location.reload();
  }
}
