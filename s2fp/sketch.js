function setup() {
  createCanvas(400, 400);
  
  // create arrays to store coordinates
  pinkTriX = [];
  pinkTriY = [];
  yellowTriX = [];
  yellowTriY = [];
  greenTriX = [];
  greenTriY = [];
  
  // add coordinates in arrays
  for (let i = 0; i < 24; i++) {
    // randomize coordinates with limits
    randomXP = random(100, 300);
    randomYP = random(100, 300);
    // add coordinates to arrays
    pinkTriX.push(randomXP);
    pinkTriY.push(randomYP);
  }
  for (let x = 0; x < 60; x++) {
    // randomize coordinates with limits
    randomXY = random(25, 375);
    randomYY = random(25, 375);
    randomXG = random(50, 350);
    randomYG = random(50, 350);
    // add coordinates to arrays
    yellowTriX.push(randomXY);
    yellowTriY.push(randomYY);
    greenTriX.push(randomXG);
    greenTriY.push(randomYG);
  }
}

function draw() {
  background('black');
  
  // keep track of current time
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  // add triangles per hour
  for (let h = 0; h < hr; h++) {
    let pn = color(255, 166, 213); // pn is pink
    pn.setAlpha(25);
    fill(pn);
    noStroke();
    // draw triangle
    // x1, y1, x2, y2, x3, y3
    triangle(pinkTriX[h], pinkTriY[h], pinkTriX[h] + 100, pinkTriY[h] - 100, pinkTriX[h] - 100, pinkTriY[h] - 100);
  }
  
  // add triangles per minute
  for (let m = 0; m < mn; m++) {
    let yw = color(255, 245, 166); // yw is yellow
    yw.setAlpha(25);
    fill(yw);
    noStroke();
    // draw triangle
    // x1, y1, x2, y2, x3, y3
    triangle(yellowTriX[m], yellowTriY[m], yellowTriX[m] + 25, yellowTriY[m] + 25, yellowTriX[m] + 25, yellowTriY[m] - 25);
  }
  
  // add triangles per second
  for (let s = 0; s < sc; s++) {
    let gr = color(175, 255, 166); // gr is green
    gr.setAlpha(25);
    fill(gr);
    noStroke();
    // draw triangle
    // x1, y1, x2, y2, x3, y3
    triangle(greenTriX[s], greenTriY[s], greenTriX[s] - 50, greenTriY[s] - 50, greenTriX[s] - 50, greenTriY[s] + 50);
  }
  
  // show time at the bottom left corner
  textFont('Courier New');
  fill('white');
  text(hr + ": " + mn + ": " + sc, 15, 380);
}
