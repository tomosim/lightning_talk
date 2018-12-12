const pointA = generatePoint();
const pointB = generatePoint();
const pointC = generatePoint();
const array = [{ x: 300, y: 300 }];

function setup() {
    createCanvas(600, 600);

}



function draw() {
    background(20);
    stroke(250, 100, 50);
    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    line(pointB.x, pointB.y, pointC.x, pointC.y);
    line(pointC.x, pointC.y, pointA.x, pointA.y);
    populatePointArray(array);
    showPoint(array);
}

function generatePoint() {
    return { x: Math.random() * 600, y: Math.random() * 600 };
}

function populatePointArray(array) {
    const roll = Math.random();
    let x = array[array.length - 1].x;
    let y = array[array.length - 1].y;
    let newX;
    let newY;
    if (roll < 0.34) {
        newX = (pointA.x + x) / 2;
        newY = (pointA.y + y) / 2;
    } else if (roll < 0.67) {
        newX = (pointB.x + x) / 2;
        newY = (pointB.y + y) / 2;
    } else {
        newX = (pointC.x + x) / 2;
        newY = (pointC.y + y) / 2;
    }
    array.push({ x: newX, y: newY })
}

function showPoint(array) {
    array.forEach(coords => point(coords.x, coords.y))
}

