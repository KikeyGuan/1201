let col, col1, col2, col3, storedCol;
let x = 100, y = 100;

let diameter = 100;

let xV = 8, yV = 6; //speed in the x and y directions

let grow=0, stopGrow=220, colGrow=220, hitx, hity; 
let noStop1 = false,noStop2 = false,noStop3 = false,noStop4 = false;


function setup(){
 createCanvas(windowWidth,windowHeight); 
 col1 = color("#851400");
 col2 = color("#00e2f2");
 col3 = color('purple');
noStroke() //frameRate(4)
}

function draw(){
//background(255,50)
let i = map(x, 0,width, 0,1)
let j = map(y, 0, height, 0,1);

col =  lerpColor(col1, col2, i) 
col = lerpColor(col, col3,j)
fill(col)
storedCol = col;


push()
  translate(x,y)
  ellipse(0,0,diameter)

 pop()

 move();

//right side wall hit check
if(x> width- diameter/2){
  hitx = x;
  hity = y;
  noStop1 = true;
}
//left side wall hit check
if(x < diameter/2){
  hitx = x;
  hity = y;
  noStop2 = true;
}
//top
if(y > height - diameter/2){
  hitx = x;
  hity = y;
  noStop3 = true;
}
//bottom
if(y<diameter/2){
  hitx = x;
  hity = y;
  noStop4 = true;
}

//ripple. each side needs their own, or they will all share one ripple
if(noStop1 == true){
  translate(hitx,hity);
  storedCol.setAlpha(colGrow);
  fill(storedCol);
  ellipse(0,0,diameter+grow);
  if(grow!=stopGrow){
    colGrow--;
    grow++;
  }
  else{
    grow = 0;
    colGrow = 220;
    noStop1 = false;
  }
}

if(noStop2 == true){
  translate(hitx,hity);
  storedCol.setAlpha(colGrow);
  fill(storedCol);
  ellipse(0,0,diameter+grow);
  if(grow!=stopGrow){
    colGrow--;
    grow++;
  }
  else{
    grow = 0;
    colGrow = 220;
    noStop2 = false;
  }
}

if(noStop3 == true){
  translate(hitx,hity);
  storedCol.setAlpha(colGrow);
  fill(storedCol);
  ellipse(0,0,diameter+grow);
  if(grow!=stopGrow){
    colGrow--;
    grow++;
  }
  else{
    grow = 0;
    colGrow = 220;
    noStop3 = false;
  }
}

if(noStop4 == true){
  translate(hitx,hity);
  storedCol.setAlpha(colGrow);
  fill(storedCol);
  ellipse(0,0,diameter+grow);
  if(grow!=stopGrow){
    colGrow--;
    grow++;
  }
  else{
    grow = 0;
    colGrow = 220;
    noStop4 = false;
  }
}


}

function mousePressed(){

  col1 = color(random(255),random(255),random(255))
  col2 = color(random(255),random(255),random(255))
  col3 = color(random(255),random(255),random(255))


}
function move(){
  if(x > width - diameter/2){
    xV = -xV;
  }
  if (x < diameter/2){
    xV = -xV;
  }
  if(y > height - diameter/2){
    yV = -yV;
  }
  if(y<diameter/2){
    yV =- yV;
  }
  x+= xV 
  y+= yV 
}