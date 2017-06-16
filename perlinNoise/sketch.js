// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
    createCanvas(800,600, WEBGL);
    walker = new Walker();
    background(127);

}

function draw() {
    walker.walk();
    walker.display();
}

function Walker() {
    this.position = createVector(0, 0, 0);
    this.noff = createVector(random(1000),random(1000), random(1000));
    this.colr;
    this.colg;
    this.colb;
    this.historypos = [];
    this.historycol = [];
    

    this.display = function() {
        //rotateY(frameCount * 0.1);
        push();
        //Draws spher at location of x y z
        translate(this.position.x, this.position.y, this.position.z);
        //With colour based on x,y,z position
        fill(this.colr, this.colg, this.colb);
        //Draw sphere
        sphere(10);
        
        
        //for (var i=0; i < this.historypos.length; i++){
        //    var posH = this.historypos[i];
        //    for (var j = 0; j < this.historycol.length; j++){
        //        //push();
        //        var colH = this.historycol[i];
        //        translate(posH.x, posH.y, posH.z);
        //        fill(colH.x, colH.y, colH.z);
        //        sphere(10);
        //        //pop();
        //    }
        //}
        pop();
        
    };

    this.walk = function() {
        //Maps position in axis to noise value
        var posx = map(noise(this.noff.x),0,1,-50,50);
        var posy = map(noise(this.noff.y),0,1,-50,50);
        var posz = map(noise(this.noff.z),0,1,-50,50);
        var pos = createVector(posx, posy, posz);
        var pos1 = p5.Vector.sub(this.position, pos);
        this.historypos.push(pos1);
        
        //Maps colour to position on the axis
        this.colr = map(this.position.x,-50,50,0,255);
        this.colg = map(this.position.y,-50,50,0,255);
        this.colb = map(this.position.z,-50,50,0,255);
        var col = createVector(this.colr, this.colg, this.colb);
        this.historycol.push(col);
        this.noff.add(0.004,0.005,0.005);
        
    };
}
