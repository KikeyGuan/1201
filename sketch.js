//switch to 2D

let x=0, y=10, speed=0.5;
let mouseRotate=0, collisionPoint=35 ,collisionPoint2=250;
let s, b;
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  
}

function draw() {
  background(220);
  orbitControl(0,0,0);

  //rotate
  //let axis = [1, 1, 0];
  rotate(mouseRotate);
  

  //draw sphere
  push();
  translate(x,y,0);
  s = sphere(10);
  pop();

  //draw box
  push();
  translate(0,100);
  b = box(500,50,50);
  pop();

  /////////////////////////////////falling (Y movement)///////////////////////////
  /*
  if(dist(x,y,0, 0,100,0)>collisionPoint && y!=65){//collsionpoint
    y=y+speed;
    if(y!=65){
      y=y+speed;
    }
    if(x>collisionPoint2 && y==65){
      y=y+speed;
    }
  }
  */

  if(y!=65){
    y=y+speed;//keep ball falling at start
  }
  if(dist(x,y,0, 0,100,0)>collisionPoint){
      y=y+speed; //keep ball falling when it get to the egde of box
    }

  /*
  if(dist(x,y,0, 0,100,0)<collisionPoint){//35<75
    x=x+speed;
    if (dist(x,y,0, 0,100,0)>collisionPoint){//27>23
    x=x-speed;
  }
  }
  */

  ///////////////Sliding (X Movement)////////////////////
  if(mouseRotate>0){ //1>1.6
    x=x+speed;
  }
  if(mouseRotate<0){
    x=x-speed;
  }
  


  //print(y)
  //print(b.width)//somehow width is 870 not 500
  //print("dist= "+dist(x,y,0, 0,100,0)+"     collisionP= "+ collisionPoint);
  //print(mouseRotate);

}

function mouseDragged() {
  //rotate with limits 
  if(mouseX>windowWidth/2 && mouseRotate<= 1.6){
    mouseRotate+=0.05;
    collisionPoint= collisionPoint2;
  }
  if(mouseX<windowWidth/2 && mouseRotate>= -1.6){
    mouseRotate-=0.05;
    collisionPoint= collisionPoint2;
  }
}

//if rotate change y speed