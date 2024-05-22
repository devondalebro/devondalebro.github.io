import { Circle } from "./circle.js";
import { ctx, canvas, radius } from './app.js';

function clearCircle(ctx, x, y, radius) {
  ctx.save(); // Save the current drawing state

  ctx.globalCompositeOperation = 'destination-out'; // Set composite operation to 'destination-out'
  ctx.beginPath(); // Start a new path
  ctx.arc(x, y, radius, 0, Math.PI * 2, false); // Create a circular path
  ctx.fill(); // Fill the path (with 'destination-out', this will clear the area)

  ctx.restore(); // Restore the previous drawing state
}

export class Screen {
  constructor() {
    this.circles = [];
  }

  newCircle(xPos, yPos) {
    this.circles.push(new Circle(xPos, yPos));
  }

  displayBackdrop() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  displayCircles() {
    this.circles.forEach((circle) => {
      circle.move();
      circle.validatePosition();
      circle.handleCollisions();

      clearCircle(ctx, circle.xPos, circle.yPos, radius);
    })
  }

  startScreen() {
    ctx.font = '30px Arial'; // Set the font size and family
    ctx.fillStyle = 'white'; // Set the text color
    ctx.textAlign = 'center'; // Set text alignment
    ctx.textBaseline = 'middle'; // Set text baseline

    // Write text on the canvas
    ctx.fillText('CLICK FOR SURPRISE!', canvas.width / 2, canvas.height / 2);
  }
  
  hasCircles() {
    return !!(this.circles.length);
  }

  reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}