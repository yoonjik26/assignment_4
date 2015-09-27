function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
xpos = mouseX;
ypos = mouseY;
}

function draw() {
	// clear the background
	background(55, 54, 56);
	xpos += (mouseX - xpos)/15;
	ypos += (mouseY - ypos)/15;
	// set a fill color
	stroke(0);
	strokeWeight(1);
	fill(255, 255, 255);
	ellipse(xpos, ypos, 50, 50);
}

