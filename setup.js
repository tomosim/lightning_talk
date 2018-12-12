const pointA = { x: 300, y: 150 }
const pointB = { x: 100, y: 450 }
const pointC = { x: 500, y: 450 }

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(20);
    stroke(255);
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    line(pointB.x, pointB.y, pointC.x, pointC.y);
    line(pointC.x, pointC.y, pointA.x, pointA.y);
}


