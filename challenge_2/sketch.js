function setup() {
	createCanvas(640, 480);
	noStroke();
}
function draw() {
	// update
	updateBall();
	paddle.x = mouseX;
	// draw
	background(50, 50, 50);
	ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
	rect(mouseX, paddle.y, paddle.width, paddle.height);
}
// updateBall: move the ball, then detect and respond to collisions
function updateBall() {
// change position
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;

	// don't let the ball go to far

	// right
	if (ball.x > 640 - ball.radius) {
		ball.speedX = -ball.speedX;
	}

	// bottom
	if (ball.y > 480 - ball.radius) {
		ball.speedY = -ball.speedY;
	}

	// left
	if (ball.x < 0 + ball.radius) {
		ball.speedX = -ball.speedX;
	}

	// top
	if (ball.y < 0 + ball.radius) {
		ball.speedY = -ball.speedY;
	}

	if (ball.x > (paddle.x - paddle.width) && ball.x < (paddle.x + paddle.width) && ball.y > (paddle.y - ball.radius)) {
		if (ball.speedY > 0) {
			ball.speedY = -ball.speedY;
		}
	}
}
