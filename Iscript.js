let angle = 0;
let radius = 120;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(20);

    // Center of the sun
    let sunX = width / 2;
    let sunY = height / 2;

    // Draw the sun
    fill(255, 200, 0);
    circle(sunX, sunY, 60);

    // Calculate planet position
    let planetX = sunX + cos(angle) * radius;
    let planetY = sunY + sin(angle) * radius;

    // Draw the planet
    fill(50, 150, 255);
    circle(planetX, planetY, 25);

    // Increase angle
    angle += 0.02;
}