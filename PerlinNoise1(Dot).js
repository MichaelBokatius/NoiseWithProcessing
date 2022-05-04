var xoff1 = 0;
var xoff2 = 10000;

function setup(){
    createCanvas(600, 600);
}

function draw(){

    background(51);
    
    //var x = random(width);
    var x  = map(noise(xoff1), 0, 1, 0, width);
    var y  = map(noise(xoff2), 0, 1, 0, height);

    //Geschwindigkeit
    xoff1 += 0.02;
    xoff2 += 0.02;

    ellipse(x, y, 30, 30);
}