//Kikey Guan
//autumn
//I haven't decided yet, but the concept for this project is to make a tool for drawing. 
// I wanted to put together simple shapes to make a textured brush. 
// I went  with the color red and other warm colors to match with the upcoming fall season.



function setup() {
  
  createCanvas(500, 500);
  background(124, 81, 70);

}

function draw() {
  colorRandR = random(200,225);
  colorRandG = random(120,180);
  colorRandB = random(100,130);
  //rect(mouseX,mouseY,100,100);
  //drawBox();

}

function mouseDragged() {
  drawBox();
}


function drawBox() {
  //positionX = mouseX;
  //positionY = mousey;

  positionX = mouseX+random(-1,1);
  positionY = mouseY+random(-1,1);
  sizeX = 5+random(-3,3);
  sizeY = 5+random(-3,3);
  strokeWeight(random(1,3));
  stroke(colorRandR-80,colorRandG-80,colorRandB-80, 90);
  //middle box
  fill(colorRandR,colorRandG,colorRandB);
  //fill(241,185,120);
  rect(positionX,positionY,sizeX,sizeY);

  //down right tringale
  fill(colorRandR,colorRandG,colorRandB);
  triangle(positionX+random(-8,8),positionY+random(-8,8),positionX+random(-8,8),positionY-random(-8,8),positionX-random(-8,8),positionY-random(-8,8));
  //rect(positionX+8,positionY+5,sizeX-2,sizeY-2);

  //topmost box
  fill(colorRandR,colorRandG,colorRandB);
  rect(positionX+8,positionY-5,sizeX-3,sizeY-3);

  //leftmost circle
  fill(colorRandR,colorRandG,colorRandB);
  circle(positionX-3,positionY, sizeX);
  //rect(positionX-3,positionY,sizeX-2,sizeY-2);
  

}
