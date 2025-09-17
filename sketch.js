//Kikey Guan
//drawing tool assignment. ocean themed. water, seaweed, sand


let col0, col, col1, col2;
let button1, button2, button3, button4;
let button1Press = false, button2Press = false, button3Press = false;
let line1=0, line2, x = 0, canSwitch = false;

function setup(){
  createCanvas(windowWidth,windowHeight); 
  background(0);

  col1 = color("#007FFF");
  col2 = color("#eee0a7ff");
  col1.setAlpha(150);
  col2.setAlpha(150);


  button1 = createButton('brush 1');
  button1.position(10, 10);
  button1.mousePressed(brush1);

  button2 = createButton('brush 2');
  button2.position(10, 35);
  button2.mousePressed(brush2);

  button3 = createButton('brush 3');
  button3.position(10, 60);
  button3.mousePressed(brush3);

  button4 = createButton('Clear');
  button4.position(10, 95);
  button4.mousePressed(clean);



}


function draw(){

  if (button1Press == true){
    if (mouseIsPressed){
      let i = map(mouseX,0,width,0,1);
      col = lerpColor(col1, col2,i); //color = color 1 + color, condition
      strokeWeight(3+random(1,10));
      stroke(col);
      line(pmouseX, pmouseY,mouseX, mouseY);
    }
  }
  
  if (button2Press == true){
    if (mouseIsPressed){
      let i = map(mouseY,0,width,0,1);
      col = lerpColor(color("#007BA7"), color("#A2CFFE"),i);
      col0 = lerpColor(color("#EDD169"), color("#00FFFF"),i);

    if(x!=20 && canSwitch == false){
      //background(0);
      //rect (100,100,100,100);
      line1= line1 + 1;
      x++;
      if(x == 20){
        canSwitch = true;
      }
    }
    if(x<=20 && canSwitch == true){
      //background(0);
      //rect(300,300,300,300);
      line1= line1 - 1;
      x--;
      if(x == 0){
        canSwitch = false;
      }
    }
    
    strokeWeight(8);
    stroke(col);
    line(pmouseX, pmouseY,mouseX, mouseY);
    strokeWeight(9);
    stroke(col0);
    line(pmouseX+line1, pmouseY-line1,mouseX-line1, mouseY+line1);
    }
    
  }

  if(button3Press == true){
    if(mouseIsPressed){
      noStroke();
      let randCol = random(1,3);
      let randColInt = int(randCol);
      if (randColInt ==1){
        fill(color("#007FFF"));
      }
      else{
        fill(color("#eee0a7ff"));
      }
      circle(mouseX+random(-10,10),mouseY+random(-10,10), 3+random(-1,3));
    }
  }
  

}

function brush1() {
  button1Press = true;
  button2Press = false;
  button3Press = false;
  
}

function brush2() {
  button1Press = false;
  button2Press = true;
  button3Press = false;
  
}

function brush3() {
  button1Press = false;
  button2Press = false;
  button3Press = true;
  
}

function clean() {
  background(0);
}