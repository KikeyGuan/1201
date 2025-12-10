let fish1, fish2, fish3, fish4, fish5;
let fishingLine=0, lineLimit, hookXPos, hookYPos, fishOnLine = false;
let timer=0;
let bgFill = 150, fishGen, i, f;

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
  lineLimit = windowHeight-150;
  hookXPos = windowWidth/2;
}

function draw(){
  drawScene();
  hookYPos = windowWidth/4+fishingLine;
  //fishGen = int(random(0,5));
  //print(mouseX+"    "+mouseY);
  //print(fishingLine);
  //print(fishList);
  //print(fishPool);
  //print(fishGen)
  //image(fishPool[0],100,100);

  ///////////////////FISHING//////////////////////
  if (fishingLine > windowHeight-250){ //470
    fishGen = int(random(0,5));
    timer++;
  }
  else{
    timer=0;
  }
  if (timer==100){
    print("CTACH");
    fishOnLine =true;
  }
  
  
  if(fishOnLine==true){
    push();
    //imageMode(CENTER);
    translate(hookXPos, hookYPos+27);
    rotate(90);
    //image(fish1,0,0);
    image(fishPool[fishGen],0,0);//needs help
    pop();
  }
  if(fishOnLine==true&&fishingLine==300){
    print("RELEASE");
    fishList.push (fishPool[fishGen]);//put fish outside of hole
    //add fish to array
    timer = 0;
    fishOnLine = false;
  }

  for(i=0;i<fishList.length;i++){
    image(fishList[i],windowWidth/2,windowHeight/2);
  }



  /////////////////////if no mouse///////////////////
  //needs fixing
  if(keyIsDown(UP_ARROW)){
    fishingLine+=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    fishingLine-=10;
  }
}


function fling(event){
  if (event.deltaY > 0 && lineLimit+fishingLine<1500) {
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
  //rect(windowWidth/2.5, windowHeight-150,200,200);

  strokeWeight(1);
  stroke(255);
  fill(0);
  arc(windowWidth/2, windowHeight-150, 120, 60, PI-5, 180);
  //arc(windowWidth/2, windowHeight-150, 120, 60, 180, PI-4);//front
  pop();

}



//thank you to:
//image array ex from xinxin: https://editor.p5js.org/xinxin/sketches/nC-CYIRGt