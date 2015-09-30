function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
}

function draw() {
	// clear the background
	background(77, 78, 96);
	var crossX = constrain(mouseX, 50, 270);
	var crossY = constrain(mouseY, 50, 430);

	println("crossX = " + crossX);
	println("crossY = " + crossY);

	// set a fill color
	fill(0, 0, 0);
	rect(50, 50, 220, 380);
	
	// draw x
	fill(239, 65, 54);
	stroke(239, 65, 54);
	strokeWeight(18);

	line(23 + crossX, 23 + crossY, 78 + crossX, 78 + crossY);
	line(23 + crossX, 78 + crossY, 78 + crossX, 23 + crossY);

	// if(mouseX > 220){
	// 	line(23 + 220, 23 + mouseY, 78 + 220, 78 + mouseY);
	// 	line(23 + 220, 78 + mouseY, 78 + 220, 23 + mouseY);
	// }
	// if(mouseY > 380){
	// 	line(23 + mouseX, 23 + 380, 78 + mouseX, 78 + 380);
	// 	line(23 + mouseX, 78 + 380, 78 + mouseX, 23 + 380);
	// }
}

		