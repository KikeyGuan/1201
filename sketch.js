//study with 3d collisions. rotate the platfrom and let the ball roll.
//try to match the color of the cricle as the ball is rolling
//get high score

let x=0, y=10, speed=0, fallSpeed=1;
let mouseRotate=0, xRotate=0, yRotate=0, collisionPoint=35 ,collisionPoint2=250;
let s, b, font;
let turnSpeed =false;
let circColor = 100, bgFill = 220, score=0;

function preload() {
  font = loadFont('PoetsenOne-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  
}


function draw() {
  background(bgFill);
  orbitControl(0,0,1);
  score();
  rotate(mouseRotate);
  drawShape();

  /////////////////////// score /////////////////////
  circColor = x+100;
  if(circColor<bgFill+5 && circColor>bgFill-5){
    score++;
    bgFill = random(0,225);

  }


  /////////////////////////////////falling (Y movement)///////////////////////////

  if(y!=65){
    y=y+fallSpeed;//keep ball falling at start
  }
  else{
    turnSpeed = true; //turn on speed, conflicts with line above if both is runing at the same time
  }
  if(dist(x,y,0, 0,100,0)>collisionPoint){
      y=y+fallSpeed; //keep ball falling when it get to the egde of box

    }

  ///////////////Sliding (X Movement)////////////////////
  if(mouseRotate>0){ //1>1.6
    x=x+speed;
  }
  if(mouseRotate<0){
    x=x+speed;
  }


  /////////////////////////////// respwan ball ////////////////////////////////
  if(y>400){
    score = 0;
    speed = 0
    x = 0 
    y= 10
  }

  //print(speed)//x+"   "+y
  //print(b.width)//somehow width is 870 not 500
  //print("dist= "+dist(x,y,0, 0,100,0)+"     collisionP= "+ collisionPoint);
  //print(mouseRotate);

}

function mouseDragged() {
  //rotate with limits 
  if(mouseX>windowWidth/2 && mouseRotate<= 1.6){
    mouseRotate+=0.05;
    circColor+=5;
    collisionPoint= collisionPoint2;
    if(turnSpeed){
      speed+=0.2;
    }
    
  }
  if(mouseX<windowWidth/2 && mouseRotate>= -1.6){
    mouseRotate-=0.05;
    circColor-=5;
    collisionPoint= collisionPoint2;
    if(turnSpeed){
      speed-=0.2;
    }
    
  }
}

function score(){
  push();
  noStroke();
  fill(circColor);
  circle(-150,-90,100);
  fill('red');
  textFont(font);
  textSize(36);
  text(str(score),-90,-80);
  pop();
}

function drawShape(){
  //draw sphere
  push();
  translate(x,y,0);
  fill('red');
  noStroke();
  s = sphere(10);
  pop();

  //draw box
  push();
  translate(0,100,0);
  b = box(500,50,50);
  pop();
}


//if rotate change y speed