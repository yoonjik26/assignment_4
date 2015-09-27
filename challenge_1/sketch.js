function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	noLoop();
	// clear the background
	background(100, 185, 235);
	fill(57, 177, 74);
	rect(0, 280, 640, 200);
}

function draw() {
	// draw stem
	fill(38, 120, 55);
	ellipse(103, 100, 15, 15);
	rect(100, 100, 5, 100, 20);

	drawTarget(140, 240, 150);
	drawTarget(320, 240, 75);
	drawTarget(500, 240, 125);
}
function drawTarget(x, y, size) {
	var size = 40;
	var x = 103;
	var y = 100;
	// first ring
	fill(255, 255, 255, 30);
	ellipse(x, y, size, size);

	// second ring
	fill(255, 255, 255, 35);
	ellipse(x, y, size - 10, size - 10);

	// third ring
	fill(255, 255, 255, 40);
	ellipse(x, y, size - 20, size - 20);

	// fourth ring
	fill(255, 255, 255, 45);
	ellipse(x, y, size - 30, size - 30);
}

