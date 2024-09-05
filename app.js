import { Screen } from './screen.js';

// Get the canvas and button elements
export const canvas = document.getElementById('myCanvas');
export const toggleBtn = document.getElementById('toggleCanvasBtn');
export let rect = canvas.getBoundingClientRect();
export let ctx = canvas.getContext('2d');
const screen = new Screen();

let isCanvasVisible = true; // State variable for canvas visibility

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Optionally, redraw content here after resizing
}

// Initial resize
resizeCanvas();

// Resize the canvas whenever the window is resized
window.addEventListener('resize', resizeCanvas);

// Toggle canvas visibility when button is clicked
toggleBtn.addEventListener('click', () => {
  isCanvasVisible = !isCanvasVisible;
  canvas.style.display = isCanvasVisible ? 'block' : 'none';
});

canvas.addEventListener('click', (event) => {
  console.log(`New circle at ${event.clientX}, ${event.clientY}`);
  screen.newCircle(event.clientX, event.clientY);
});

const main = () => {
  ctx = canvas.getContext('2d');
  rect = canvas.getBoundingClientRect();
  window.requestAnimationFrame(main);
  screen.reset();
  if (!screen.hasCircles()) {
    screen.displayBackdrop();
    screen.startScreen();
  } else {
    screen.displayBackdrop();
  }
  screen.displayCircles();
};

main(); // Start the cycle

export const radius = 70;
export const speed = 5;
