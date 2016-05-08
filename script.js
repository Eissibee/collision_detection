/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

hey lol ch-ch-ch-ch-changes

*/

var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck');
var speed = 50;

puck.style.left = puck_x+'px';
puck.style.top = puck_y+'px';

function logCoordinates() {
    console.log('x:'+puck_x+' y:'+puck_y);
}

function checkCollision() {
    console.log('check');
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250) {
      console.log('collision');
      document.getElementById('gap').style.backgroundColor = 'red';
      }
    else { document.getElementById('gap').style.backgroundColor = 'white';
    }
    

    
    if (puck_x > 100 && puck_x < 170 && puck_y > 50 && puck_y < 120) {
      console.log('collision');
      document.getElementById('puck').style.width = '20px';
      document.getElementById('puck').style.height = '20px';
      }
    
    
    
   
    else if (puck_x > 100 && puck_x < 170 && puck_y > 260 && puck_y < 350) {
      console.log('collision');
      document.getElementById('puck').style.width = '5px';
      document.getElementById('puck').style.height = '5px';
      }
    else { document.getElementById('puck').style.width = '10px';
    document.getElementById('puck').style.height = '10px';
    }
    
    
}

document.getElementById('right').addEventListener('click', function() {
   if (puck_x < 610 - speed) {
    puck_x += speed;
   puck.style.left = puck_x+'px';
   logCoordinates();
  checkCollision();
}
});

document.getElementById('left').addEventListener('click', function() {
    if (puck_x > 100 - speed) {
    puck_x -= speed;
   puck.style.left = puck_x+'px';
   logCoordinates();
   checkCollision();
    }
});

document.getElementById('up').addEventListener('click', function() {
    if (puck_y > 80 - speed) {
    puck_y -= speed;
   puck.style.top = puck_y+'px';
   logCoordinates();
   checkCollision();
    }
});

document.getElementById('down').addEventListener('click', function() {
    if (puck_y < 410 - speed) {
    puck_y += speed;
   puck.style.top = puck_y+'px';
   logCoordinates();
   checkCollision();
    }
});