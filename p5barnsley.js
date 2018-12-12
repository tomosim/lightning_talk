const array = [{ x: 300, y: 300 }];

function setup() {
    createCanvas(600, 600);

}



function draw() {
    background(20);
    stroke(255, 90, 90);
    strokeWeight(3);
    populatePointArray(array);
    showPoint(array);
}

function generatePoint() {
    return { x: Math.random() * 600, y: Math.random() * 600 };
}

function populatePointArray(array) {
    const x = array[array.length - 1].x;
    const y = array[array.length - 1].y;
    const roll = Math.random();
    let newX;
    let newY;
    if (roll < 0.02) {
        newX = 0;
        newY = 0.16 * y;
    } else if (roll < 0.87) {
        newX = 0.85 * x + 0.04 * y;
        newY = -0.04 * x + 0.85 * y + 1.6;
    } else if (roll < 0.94) {
        newX = 0.2 * x + -0.26 * y;
        newY = 0.23 * x + 0.22 * y + 1.6;
    } else {
        newX = -0.15 * x + 0.28 * y;
        newY = 0.26 * x + 0.24 * y + 0.44;
    }
    array.push({ x: newX, y: newY })
}

function showPoint(array) {
    array.forEach(coords => point(coords.x * 78 + 300, coords.y * -58 + 600))
}

