const ViewBox = document.getElementById("viewbox");
ViewBox.style.width = VIEWPORT_WIDTH + "px";
ViewBox.style.height = VIEWPORT_HEIGHT + "px";

const ballArray = [];

for (let i = 0; i < BALL_COUNT; i++) {
  randomRadius = randomGenerator(10, 25);
  const BALL_WIDTH_HEIGHT = randomRadius * 2;
  randomX = randomGenerator(0, VIEWPORT_WIDTH - BALL_WIDTH_HEIGHT);
  randomY = randomGenerator(0, VIEWPORT_HEIGHT - BALL_WIDTH_HEIGHT);
  randomColor = randomColorGenerator();
  let ball = new Ball(randomX, randomY, randomColor, randomRadius);
  ballArray.push(ball);
  ViewBox.appendChild(ball.element);
}

function render() {
  ballArray.forEach((ball, ballIndex) => {
    ball.draw();
    ball.move();

    /**
     * check collision with  otherball
     */
    ballArray.forEach((otherBall, otherBallIndex) => {
      if (ballIndex === otherBallIndex) {
        return;
      }
      if (
        distanceGenerator(ball.x, ball.y, otherBall.x, otherBall.y) <
        ball.radius + otherBall.radius
      ) {
        ball.checkBallCollision();
        otherBall.checkBallCollision();
      }
    });

    ball.checkWallCollision();
  });
  requestAnimationFrame(render);
}
render();
