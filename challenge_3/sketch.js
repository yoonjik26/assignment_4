
function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
}

function draw() {
	// clear the background
	background(77, 78, 96);

	// set a fill color
	fill(0, 0, 0);
	rect(50, 50, 220, 380);
	
	// draw x
	fill(239, 65, 54);
	stroke(239, 65, 54);
	strokeWeight(18);
	
	line(30 + mouseX, 20 + mouseY, 85 + mouseX, 75 + mouseY);
	line(30 + mouseX, 75 + mouseY, 85 + mouseX, 20 + mouseY);
}