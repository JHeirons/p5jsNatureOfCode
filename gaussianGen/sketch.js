

function setup() {
  createCanvas(600, 400);
  smooth();
}

function draw() {
    background(255);
    
    var xloc = randomGaussian();
    var sd = 70;
    var mean = width/2;
    xloc = (xloc * sd) + mean;
    
    noStroke();
    fill(0);
    ellipse(xloc, height/2, 20, 20);
   

}

