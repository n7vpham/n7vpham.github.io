let rad = 60;
let xpos, ypos;
let xspeed = 20.8;
let yspeed = 19.2;

let xdirection = 1;
let ydirection = -1;

function setup() {
    createCanvas(720, 400);
    fill(25, 25, 112);
    frameRate(30);
    ellipseMode(RADIUS);
    xpos = width / 2;
    ypos = height / 2;
}

function draw() {
    background(25, 25, 112);
    stroke(25, 25, 112);
    triangle(20, 71, 75, 45, 20, 15);
    xpos = xpos + xspeed * xdirection * 2.5;
    ypos = ypos + yspeed * ydirection * 1;

    if (xpos > width - rad || xpos < rad) {
        xdirection *= -1;
        ydirection -= 2;
        fill(25, 25, 112);
    }
    if (ypos > height - rad || ypos < rad) {
        ydirection *= -1;
        fill(70, 255, 127);
    }

    ellipse(xpos, ypos, rad, rad);
}
