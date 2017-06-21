// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var r = 50;
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.0001;

function setup() {
    
  createCanvas(640, 360);
}

function draw() {
    background(220);
    
    //r = map(noise(random(1000)), 0, 1, 30, 150);
    translate(width/2, height/2);
    //rotate(angle);
    var x = r * cos(angle);
    var y = r * sin(angle);
    //stroke(0);
    //strokeWeight(2);
    fill(127);
    stroke(0);
    line(0,0,x,y);
    //line(-60, 0, 60, 0);
    //ellipse(60, 0, 16, 16);
    ellipse(x, y, 20, 20, 50);
    
    if(mouseIsPressed){
        aAcceleration = map(mouseX, 0, width, -0.001, 0.001);
        angle += aVelocity;
        aVelocity += aAcceleration;
    }
    
}