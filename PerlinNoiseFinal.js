var inc = 0.1;
var scl = 20;
var cols, rows;
var fr;
var zoff = 0;
var particles = [];
var flowfield;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255);

    pixelDensity(1);
    cols = floor(width / scl);
    rows = floor(height / scl);
    //fr = createP('');
    flowfield = new Array(cols * rows);
    for(var i = 0; i < 5000; i++){
        particles[i] = new Particle();
    }
    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    var yoff = 0;
    for (var y = 0; y < rows; y++){
        var xoff = 0;
        for (var x = 0; x < cols; x++){

            var index = x + y * cols;
            //var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            //var angle = noise(xoff /2, yoff, zoff) * TWO_PI * 4;
            //var angle = noise(xoff, yoff, zoff) * PI * 6;
            var angle = sin(noise(xoff, yoff, zoff) * TWO_PI * 4);

            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
            stroke(4, 50);
        }
        yoff += inc * inc;
        //yoff += inc;
        //zoff += 0.00000000000000000000008;
        zoff += 0.00000000000008;
    }

    for(var i = 0; i < particles.length; i++){
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
    //fr.html(floor(frameRate()));
}