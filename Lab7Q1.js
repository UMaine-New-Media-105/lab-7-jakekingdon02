// Jake Kingdon 
// Lab 7 Question 1
// March 29th, 2023
// I Created a sketch that uses circles that diagonally stretch across the canvas from the top-left to the bottom-right and then 
// from the top-right to the bottom-left, making an "X" shape.

// Colors for the elipses.
let ellipseColors = ['red', 'green', 'blue', 'yellow'];

function setup() {
createCanvas(400, 400);
stroke("white")
strokeWeight(2)
noLoop();
}

function draw() {
background("black");

// Draw ellipses from top-right to bottom-left.
for (let i = 0; i < width / 2; i += 14) {
fill(random(ellipseColors));
ellipse(width / 2+ i, height / 2 - i, 20, 20); 
ellipse(width / 2 - i, height / 2 + i, 20, 20); 

// Draw ellipses from bottom-right to top-left. 
ellipse(width / 2 + i, height / 2 + i, 20, 20); 
ellipse(width / 2 - i, height / 2 - i, 20, 20); 
}
}
