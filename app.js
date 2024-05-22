import { Screen } from "./screen.js";
// Get the canvas element
export const canvas = document.getElementById('myCanvas');
export let rect = canvas.getBoundingClientRect();
export let ctx = canvas.getContext('2d');
const screen = new Screen();

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Optionally, redraw content here after resizing
}

// Initial resize
resizeCanvas();

// Resize the canvas whenever the window is resized
window.addEventListener('resize', resizeCanvas);

canvas.addEventListener('click', (event) => {
  console.log(`New cirle at ${event.clientX}, ${event.clientY}`);
  screen.newCircle(event.clientX, event.clientY);
});

const main = () => {
  ctx = canvas.getContext('2d');
  rect = canvas.getBoundingClientRect();
  window.requestAnimationFrame(main);
  screen.reset();
  if (!screen.hasCircles()) {
    console.log('yes')
    screen.displayBackdrop();
    screen.startScreen();
  } else {
    screen.displayBackdrop();
  }
  screen.displayCircles();
};

main(); // Start the cycle

// Get the drawing context

export const radius = 70;
export const speed = 5;
