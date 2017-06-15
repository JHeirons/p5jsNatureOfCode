var walker;

function setup() {
    createCanvas(600, 400);
    walker = new Walker();
}

function draw() {
    background(225);
    walker.display();
    walker.walk();
}

function Walker() {
    this.x = width/2;
    this.y = height/2;
    this.history = [];
    
    
    this.display = function() {
        noStroke();
        fill(123, 0, 225);
        rect(this.x, this.y, 15, 15);
        
        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i];
            noStroke();
            fill(123, 0, 225);
            rect(pos.x, pos.y, 5, 5);
        }
        
    }
    
    this.walk = function() {
        this.choice = floor(random(4));
        if(this.choice == 0){
            this.x = this.x + 1;
        }
        else if(this.choice == 1){
            this.x = this.x - 1;
        }
        else if(this.choice == 2){
            this.y = this.y + 1;
        }
        else{
            this.y = this.y - 1;
        }
        var v = createVector(this.x, this.y);
        this.history.push(v);
    }
}

