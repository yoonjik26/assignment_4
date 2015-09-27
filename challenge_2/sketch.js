function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// clear the background
	background(50, 51, 51);
}
var ball = {x: 500, y: 100, speedX: 5, speedY: 5, radius: 25};
var paddle = {x: 0, y: 350. width: 300, height: 30};

function draw() {
paddle.x = mouseX;
ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
rect(paddle.x - paddle.width * 0.5, paddle.y, paddle.width, paddle.height);

// change position
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;
// right
	if (ball.x > width - ball.radius) {
		ball.speedX = -ball.speedX;
	}

	// bottom
	if (ball.y > height - ball.radius) {
		ball.speedY = ball.speedY;
	}

	// left
	if (ball.x < 0 + ball.radius) {
		ball.speedX = -ball.speedX;
	}

	// top
	if (ball.y < 0 + ball.radius) {
		ball.speedY = -ball.speedY;
	}

	// check for a *collision* between the ball and the paddle
	// look up the && operator

	if (ball.x > (paddle.x - paddle.width * 0.5) && ball.x < (paddle.x + paddle.width * 0.5) && ball.y > paddle.y - ball.radius) {
		if (ball.speedY > 0) {
			ball.speedY = -ball.speedY;
		}
	}
}



