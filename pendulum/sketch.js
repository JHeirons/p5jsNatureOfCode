// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pendulum

// A simple pendulum simulation
// Given a pendulum with an angle theta (0 being the pendulum at rest) and a radius r
// we can use sine to calculate the angular component of the gravitational force.

// Gravity Force = Mass * Gravitational Constant;
// Pendulum Force = Gravity Force * sine(theta)
// Angular Acceleration = Pendulum Force / Mass = gravitational acceleration * sine(theta);

// Note this is an ideal world scenario with no tension in the 
// pendulum arm, a more realistic formula might be:
// Angular Acceleration = (g / R) * sine(theta)

// For a more substantial explanation, visit:
// http://www.myphysicslab.com/pendulum1.html 
var p = [];
var x = 200;
var y = 0;
var len = 200;
var hit;

function setup()  {
  createCanvas(640,360);
    for(var i = 0; i < 3; i++) {
        p[i] = new Pendulum(createVector(x,y), len);
        x += 50;
    }
  // Make a new Pendulum with an origin position and armlength
  

}

function draw() {
  background(51);
    for(var z =0; z < p.length; z++){
        p[z].update();
        p[z].drag();
        p[z].display();
    }
    for(var i = 0; i < p.length-1; i++){
        for (var j = 1; j < p.length; j++){
            hit = p[i].collision(p[j]);
            if(hit == true) {
                var newVel = p[i].v1(p[j]);
                p[j].v2(newVel);
            }
        } 
    } 
    
}

function mousePressed() {
    for(var i = 0; i < p.length; i++){
        p[i].clicked(mouseX,mouseY);  
    }
}

function mouseReleased() {
    for(var i = 0; i < p.length; i++){
        p[i].stopDragging();
    }
}