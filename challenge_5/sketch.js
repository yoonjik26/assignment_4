
function setup() {
	// create a place to draw
	createCanvas(640, 480);
	// frameRate(10)
	// noStroke();
	// noLoop();
}

function draw() {
	// clear the background
	background(50, 20, 21);

if (mouseIsPressed) {
	stroke(255);
	strokeWeight(5);
	line(mouseX, mouseY, pmouseX, pmouseY);
} else {
	// set a fill color
	fill(255, 255, 255);
	ellipse(mouseX, mouseY, 50, 50);
	fill(28,117, 255);
	ellipse(mouseX, mouseY, 30, 30);
}
	
	// stroke(255);
	// strokeWeight(5);
	// line(mouseX, mouseY, pmouseX , pmouseY);
}

// function mousePressed() {
// 	stroke(255);
// 	strokeWeight(5);
// 	line(mouseX, mouseY, pmouseX, pmouseY);
// }
