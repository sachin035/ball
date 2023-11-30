class Ball {
  /**
   *
   * @param {*} x  x co-ordinates of ball
   * @param {*} y y co-ordinates of ball
   * @param {*} color color of the ball
   * @param {*} radius radius if the ball
   */
  constructor(x, y, color, radius) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = SPEED;
    this.radius = radius;
    this.dx = getBallInitialVelocity(0, 1);
    this.dy = getBallInitialVelocity(0, 1);
    this.element = document.createElement("div");
    this.element.classList.add("circle");
  }

  draw() {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.style.width = this.radius + "px";
    this.element.style.height = this.radius + "px";
    this.element.style.backgroundColor = this.color;
  }
  move() {
    this.x = this.x + this.dx * this.speed;
    this.y = this.y + this.dy * this.speed;
  }

  /**
   * check collision with the wall
   */
  checkWallCollision() {
    if (this.x + this.radius * 2 >= VIEWPORT_WIDTH || this.x <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius * 2 >= VIEWPORT_HEIGHT || this.y <= 0) {
      this.dy = -this.dy;
    }
  }

  checkBallCollision() {
    this.dx = -this.dx;
    this.dy = -this.dy;
  }
}
