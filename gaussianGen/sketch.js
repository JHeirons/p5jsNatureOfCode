var distribution = new Array(500);

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0,150));
  }
}

function draw() {
  background(255);
 translate(width/2, height/2);
 for (var i = 0; i < distribution.length; i++) {
    rotate(TWO_PI/distribution.length);
    stroke(0);
    var dist = abs(distribution[i]);
    line(0, 0, dist, 0);
  }
}

