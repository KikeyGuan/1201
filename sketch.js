let fish1, fish2, fish3, fish4, fish5;
let fishingLine=0, lineLimit, hookXPos, hookYPos, fishOnLine = false;
let timer=0;
let bgFill = 150;

let fishList = []
let fishPool = []

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
  lineLimit = windowHeight/4;
  hookXPos = windowWidth/2;
}

function draw(){
  hookYPos = windowWidth/4+fishingLine;
  //print(mouseX+"    "+mouseY);
  //print(fishingLine);
  //print(fishList);
  print(fishPool);
  //image(fishPool[0],100,100);

  drawScene();


  ///////////////////FISHING//////////////////////
  if (fishingLine == 470){
    timer++;
  }
  if (timer==100){
    print("CTACH");
    fishOnLine =true;
  }
  if(fishOnLine==true&&fishingLine==300){
    print("RELEASE");
    fishList.push ("fish1");
    //add fish to array
    timer = 0;
    fishOnLine = false;
  }
  if(fishOnLine==true){
    push();
    //imageMode(CENTER);
    translate(hookXPos, hookYPos+27);
    rotate(90);
    //image(fish1,0,0);
    image(fish1,0,0);
    pop();
  }

 
 
}

function fling(event){
  if (event.deltaY > 0 && lineLimit+fishingLine<680) {
    //print("going down");
    fishingLine+=10;

  }
  if (event.deltaY < 0 && lineLimit< lineLimit+fishingLine) {
    //print("going up");
    fishingLine-=10;
  }
}

function drawScene(){
  background(bgFill);
  push();
  stroke(255);
  fill(0);
  arc(windowWidth/2, windowHeight-150, 120, 60, 180, PI-4);
  //arc(windowWidth/2, windowHeight-150, 120, 60, PI, 0);//back
  strokeWeight(5);
  stroke(100);
  line(windowWidth/2, windowWidth/4, windowWidth/2, windowWidth/4+fishingLine);
  pop();

  push();
  noStroke();
  fill(80);//bg fill
  rect(windowWidth/2.5, windowHeight-150,200,200);

  strokeWeight(1);
  stroke(255);
  fill(0);
  arc(windowWidth/2, windowHeight-150, 120, 60, PI-5, 180);
  //arc(windowWidth/2, windowHeight-150, 120, 60, 180, PI-4);//front
  pop();

}



//thank you to:
//image array ex from xinxin: https://editor.p5js.org/xinxin/sketches/nC-CYIRGt