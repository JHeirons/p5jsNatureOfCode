var distribution = new Array(1000);

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(255);
    
   for (var i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0,150));
  } 
    
 translate(width/2, height/2);
 for (var i = 0; i < distribution.length; i++) {
    rotate(TWO_PI/distribution.length);
    stroke(0);
    fill(random(255), random(255), random(255));
    var dist = abs(distribution[i]);
    rect(0, 0, dist, 2);
    
  }

}

