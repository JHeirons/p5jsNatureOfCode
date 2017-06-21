// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.walk();
  walker.display();
}

function Walker() {
  this.position = createVector(width/2,height/2);
  this.noff = createVector(random(1000),random(1000), random(1000));
    this.col;

  this.display = function() {
    
    fill(this.col);
    noStroke();
    ellipse(this.position.x, this.position.y, 30, 30);
  };

  this.walk = function() {
    this.position.x = map(noise(this.noff.x),0,1,0,width);
    this.position.y = map(noise(this.noff.y),0,1,0,height);
    this.col = map(noise(this.noff.z),0,1,0,255);
    this.noff.add(0.005,0.005,0.01);
  };
}