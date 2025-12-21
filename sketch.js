//kikeyguan
//fishing
//how to play: using mouse scroller or the up/down arrow keys. drop your fishing
//line all the way down. wait for 3-5 second, then pull up.
let fish1, fish2, fish3, fish4, fish5;
let fishingLine=0, lineLimit, hookXPos, hookYPos, fishOnLine = false, lineColor;
let timer=0;
let bgFill = 150, fishGen, i, randX, randY, xV=1,yV=1, size;

//started with arrays and continuing with arrays
let fishList = []
let fishPool = []
let Xgen = []
let Ygen = []
let xVa = []
let yVa = []
let flip = []
let fishSize = []

function preload(){
  fishPool[0] = loadImage("fish1.png");
  fishPool[1] = loadImage("fish2.png");
  fishPool[2] = loadImage("fish3.png");
  fishPool[3] = loadImage("fish4.png");
  fishPool[4] = loadImage("fish5.png");
}

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(fling);
  imageMode(CENTER);
  angleMode(DEGREES);
  lineLimit = windowHeight-150;
  hookXPos = windowWidth/2;
  lineColor = color(100,100,100);
}

function draw(){
  drawBack();
  hookYPos = windowWidth/4+fishingLine;

  ///////////////////FISHING//////////////////////
  if (fishingLine > windowHeight-250){ //470
    fishGen = int(random(0,5));
    randY = int(random(100,windowHeight/2));
    randX = int(random(100,windowWidth-100));
    size = int(random(50,100));
    timer++;
  }
  else{
    timer=0;
  }
  if (timer==100){
    print("CTACH");
    fishOnLine =true;
    lineColor= color(177, 91, 91);
  }
  if(fishOnLine==true){
    push();
    translate(hookXPos, hookYPos+27);
    rotate(90);
    image(fishPool[fishGen],0,0);
    pop();
  }
  if(fishOnLine==true&&fishingLine<windowHeight/2-200){
    Xgen.push(randX);
    Ygen.push(randY);
    yVa.push(yV);
    xVa.push(xV);
    fishSize.push(size);
    print("RELEASE");
    fishList.push (fishPool[fishGen]);
    flip.push (true);
    timer = 0;
    lineColor = color(100,100,100);
    fishOnLine = false;
  }
  DrawFront();

  ////////////////// Fish movements //////////
  for(i=0;i<Xgen.length;i++){
    if(Xgen[i] > width){
      //xV = -xV;
      xVa[i] = xVa[i]*-1;
      flip[i] = false;
    }
    if(Xgen[i] < 0){
      //xV = -xV;
      xVa[i] =xVa[i]*-1;
      flip[i] = true;
    }
    if(Ygen[i] > height){
      //yV = -yV;
      yVa[i] =yVa[i]*-1;
    }
    if(Ygen[i]<0){
      //yV = -yV;
      yVa[i] =yVa[i]*-1;
    }
    Xgen[i]+= xVa[i];
    Ygen[i]+= yVa[i];
  }
  for(i=0;i<fishList.length;i++){
    if(flip[i]==true){
      push();
      scale(-1,1);
      image(fishList[i],Xgen[i]*-1,Ygen[i],fishSize[i]);
      pop();
    }
    else{
      image(fishList[i],Xgen[i],Ygen[i],fishSize[i]);
    }
    
  }
  
  /////////////////////if no mouse///////////////////
  if(keyIsDown(DOWN_ARROW)&&fishingLine<lineLimit){
    fishingLine+=10;
  }
  if(keyIsDown(UP_ARROW)&& lineLimit< lineLimit+fishingLine){
    fishingLine-=10;
  }

  ////////////////Text////////////// 
  textSize(15);
  text('How to play:', 15, 15);
  textSize(12);
  text('using mouse scroller or the up/down arrow keys', 15, 30);
  text('drop your fishingline all the way down', 15, 45);
  text('wait for 3-5 second, then pull up.', 15, 60);
  text('Fish Cuaght: '+ fishList.length , 35, 95)
}

function fling(event){
  if (event.deltaY > 0 && fishingLine<lineLimit) { 
    //print("going down");
    fishingLine+=10;

  }
  if (event.deltaY < 0 && lineLimit< lineLimit+fishingLine) {
    //print("going up");
    fishingLine-=10;
  }
}

function drawBack(){
  background(bgFill);
  push();
  stroke(255);
  fill(0);
  arc(windowWidth/2, windowHeight-150, 120, 60, 180, PI-4);
  strokeWeight(5);
  stroke(lineColor);//100
  line(windowWidth/2, windowWidth/4, windowWidth/2, windowWidth/4+fishingLine);
  pop();
}

function DrawFront(){
  push();
  noStroke();
  fill(bgFill);
  rect(windowWidth/2.5, windowHeight-150,1000,1000);
  strokeWeight(1);
  stroke(255);
  fill(0);
  arc(windowWidth/2, windowHeight-150, 120, 60, PI-5, 180);
  pop();
}



//thank you to:
//image array ex from xinxin: https://editor.p5js.org/xinxin/sketches/nC-CYIRGt