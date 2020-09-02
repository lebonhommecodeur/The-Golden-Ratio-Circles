// Based on this animation : 
// https://www.reddit.com/r/educationalgifs/comments/awjcez/the_golden_ratio/

const width = 700;
const height = width;
const firstCircleDiametre = 600;
const phi = (1 + Math.sqrt(5)) / 2;
const nbCircles = 10;
const speed = 1000;

function setup() {
  createCanvas(width, height);
  noFill();
  strokeWeight(2);
  stroke(255);
}

function draw() {
  background(0);

  // First Circle
  circle(width / 2, height / 2, firstCircleDiametre);
  let diametre = firstCircleDiametre;

  // Draw other circles
  for (i = 1; i < nbCircles; i++) {
    diametre = diametre / phi;
    let xspeed = speed / i
    translate(p5.Vector.fromAngle((millis() / xspeed) + 1.55, diametre / 3.25));
    circle(width / 2, height / 2, diametre);
  }
  
  // if(frameCount >=377) noLoop(); 
}
