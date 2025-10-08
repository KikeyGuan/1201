// Click and drag the mouse to view the scene from different angles.
let col;

function setup() {
    createCanvas(windowWidth,windowHeight, WEBGL);
    col1 = color("#ececd9ff");
    col2 = color("#F3F3F1");
}

function draw() {
    background(color("#66B2FF"));
    col = lerpColor(col1, col2,1);
    // Enable orbiting with the mouse.
    orbitControl();
  
    noStroke();
    scale(2,2,2);
    
    let angle = frameCount * 0.01;
    rotateY(angle);

    FESH();
}


function FESH(){
    //body
    fill(col2);
    ellipsoid(60, 20, 25); //x,y,z

    //eyes
    fill(0);
    translate(-55, 0, 10);
    sphere(3,5,5);
    translate(-1, 0, -19);
    sphere(3,5,5);
    //mouth
    scale(0.5,1,1);
    translate(-8, 0, 9);
    cone(3);
    

    //tail
    scale(2,1,0.2);
    translate(115, 0, 0);
    let axis = [0, 0, 1];
    rotate(52,axis);
    fill(col1);
    cone(30);

    //a fix, push and pop. push saves postion/ location. 
    //after the changes pop goes back to orignal positon/location
    

}