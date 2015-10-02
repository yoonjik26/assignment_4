var mouseUpX = 0;
var mouseUpY = 0;
var ellipseSize = 50;

function setup() {
	createCanvas(640, 480);
	fill(28, 117, 255);
	stroke(255, 255, 255);
	strokeWeight(10);
}

function draw() {
	// clear the background
	background(50, 20, 21);

if (!mouseIsPressed) {
	mouseUpX = mouseX;
	mouseUpY = mouseY;
} else {
	// set a fill color
	line(mouseUpX, mouseUpY, mouseX, mouseY);
	ellipse(mouseUpX, mouseUpY, ellipseSize, ellipseSize);
}	
	ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}
