const array = [{ x: 300, y: 300, b: false, l: false }];


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(30);
    showPoint(array)
    generatePoint(array)
    noStroke();
    fill(255, 255, 0);
    triangle(300, 45, 325, 90, 275, 90);
    triangle(300, 105, 325, 60, 275, 60);
}

function showPoint(array) {
    const colours = { red: [255, 50, 50], pink: [244, 66, 206], blue: [100, 100, 255], white: [255, 255, 255] }
    array.forEach(coord => {

        if (coord.b) {
            stroke(colours[coord.b][0], colours[coord.b][1], colours[coord.b][2])
            strokeWeight(15)
            point(coord.x * -80 + 300, coord.y * -50 + 600)
        } else if (coord.l) {
            stroke(250, 250, 0)
            strokeWeight(5)
            drawGradient(coord.x * -80 + 300, coord.y * -50 + 600)
        } else {
            stroke(30, 255, 30, 150)
            strokeWeight(4)
            point(coord.x * -80 + 300, coord.y * -50 + 600)
        }
    })
}

function generatePoint(array) {
    const current = array[array.length - 1];
    let newx = 0;
    let newy = 0;
    let newCoord = {};
    const rand = random(0, 99);
    const rand2 = random(0, 99);
    const colours = ['pink', 'blue', 'red', 'white'];

    if (rand <= 1) {
        newx = 0;
        newy = 0.16 * current.y;
    } else if (rand < 85) {
        newx = 0.85 * current.x;
        newy = -0.04 * current.x + 0.85 * current.y + 1.6;
    } else if (rand < 92) {
        newx = -0.15 * current.x - 0.28 * current.y
        newy = 0.26 * current.x - 0.21 * current.y + 0.2;
    } else {
        newx = 0.15 * current.x + 0.28 * current.y
        newy = 0.26 * current.x - 0.21 * current.y + 0.2;
    }

    if (rand2 > 97) {
        newCoord = { x: newx, y: newy, b: colours[Math.floor(Math.random() * 4)], l: false }
    }
    else if (rand2 >= 90) {
        newCoord = { x: newx, y: newy, b: false, l: true }
    }
    else {
        newCoord = { x: newx, y: newy, b: false, l: false }
    }
    array.push(newCoord);
}

function drawGradient(x, y) {
    var radius = 20;
    var a = random(150, 255);
    var b = 255;
    var stepA = a / radius;
    var stepB = b / radius;
    for (var r = 0; r < radius; r++) {
        noFill();
        stroke(255, 255, b, a);
        strokeWeight(1);
        ellipse(x, y, r, r);
        a = (a - stepA) % 255;
        b = (b - stepB) % 255;
    }
}