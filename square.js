var canvas;

function windowResized(){
    resizeCanvas(windowWidth, 400)
}

function setup(){
    canvas = createCanvas(800, 800);
    canvas.parent('sketch-holder2');
}

function draw(){
    background(255);
}