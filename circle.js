import { radius, rect, speed } from './app.js';

export class Circle {
  constructor(xPos, yPos) {
    this.xPos = xPos,
    this.yPos = yPos;
    this.xDir = getRandomIntInclusive(-100, 100) / 100;
    this.yDir = getRandomIntInclusive(-100, 100) / 100;
  }

  validatePosition() {
    if (this.xPos + radius > rect.width) this.xPos = rect.width - radius;
    if (this.yPos + radius > rect.height) this.yPos = rect.height - radius;
    if (this.xPos - radius < 0) this.xPos = radius;
    if (this.yPos - radius < 0) this.yPos = radius;
  }

  handleCollisions() {
    if (this.xPos + radius === rect.width || this.xPos - radius === 0) this.xDir *= -1;
    if (this.yPos + radius === rect.height || this.yPos - radius === 0) this.yDir *= -1;
  }

  move() {
    this.xPos += this.xDir * speed;
    this.yPos += this.yDir * speed;
  }
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}