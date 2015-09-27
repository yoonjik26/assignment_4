var xPositions = [];
var yPositions = [];

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	noLoop();
	colorMode(RGB);
	background(100, 185, 235);
	fill(57, 177, 74);
	rect(0, 280, 640, 200);
	for (var i = 0; i < 40; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(200, 400);
	}
}
function draw() {
	var size = 40;
	for (var i = 0; i < 40; i++){
		// draw stem
		fill(38, 120, 55);
		rect(xPositions[i] - 2.5, yPositions[i] - 2.5, 5, 100, 20);
		ellipse(xPositions[i], yPositions[i], 15, 15);
		// draw flower
		// first ring
		fill(255, 255, 255, 85);
		ellipse(xPositions[i], yPositions[i], size, size);
		// second ring
		fill(255, 255, 255, 90);
		ellipse(xPositions[i], yPositions[i], size - 10, size - 10);
		// third ring
		fill(255, 255, 255, 95);
		ellipse(xPositions[i], yPositions[i], size - 20, size - 20);
		// fourth ring
		fill(255, 255, 255, 100);
		ellipse(xPositions[i], yPositions[i], size - 30, size - 30);
	}
}
