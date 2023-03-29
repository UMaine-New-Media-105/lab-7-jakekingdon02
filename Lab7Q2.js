// Jake Kingdon
// Lab 7 Question 1
// March 29th, 2023
// I Created a sketch that uses circles to draw a grid of 5 by 5 shapes, with gradients and nested loops applied.

function setup() {
  createCanvas(500, 500);
  background("gray");
}

function draw() {
  noStroke();

// Create nested loops to draw 5 by 5 grid of circles.
for (let i = 0; i < 5; i++) {
for (let j = 0; j < 5; j++) {

  // Define the gradient.
let c1 = color(0, 255, 0); 
let c2 = color(0, 0, 0); 
let gradientPos = map(i, 0, 4, 0, 1); 

// Use lerpColor() to interpolate between the two colors based on the gradient position
fill(lerpColor(c1, c2, gradientPos));
ellipse(50 + i * 100, 50 + j * 100, 100, 100); // Draw circle at each position in grid
    }
  }
}

