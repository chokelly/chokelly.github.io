function preload() {
  winImg1 = loadImage('dog1.gif');
  winImg2 = loadImage('dog2.gif');
  winImg3 = loadImage('dog3.gif');
  winImg4 = loadImage('dog4.gif');
  winImg5 = loadImage('dog5.gif');
  loseImg1 = loadImage('mydog1.png');
  loseImg2 = loadImage('mydog2.png');
  // ROUND CORNERS OF THIS PIC
  loseImg3 = loadImage('mydog3.jpg');
}

function setup() {
  var canvas = createCanvas(windowWidth, 0.90 * windowHeight);
  rand = random(1000);
  cardArr = [];
  pickedCard = round(random(0, 8));
  tries = 5;
  
  document.getElementById("heading1").innerHTML = "find the winning card !!";
  document.getElementById("lives").innerHTML = "tries remaining: 5";
  colorArr = ["lightpink", "lightskyblue", "lightgreen", "lightsalmon"];
  colorIndex = round(random(0, 3));
  document.body.style.background = "black";
  
  winImgArr = [winImg1, winImg2, winImg3, winImg4, winImg5];
  winArrIndex = round(random(0, 4));
  loseImgArr = [loseImg1, loseImg2, loseImg3];
  loseArrIndex = round(random(0, 2));
}

class Card {
  // x = x-position; y = y-position; c1 = red value rgb; c2 = green value rgb; c3 = blue value rgb
  constructor(x, y, c1, c2, c3) {
    this.x = x;
    this.y = y;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.selected = false;
    this.winCard = false;
  }
  
  // getter functions
  getSelect() {
    return this.selected;
  }
  getWin() {
    return this.winCard;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  
  // setter functions
  setSelect() {
    this.selected = true;
  }
  setWin() {
    this.winCard = true;
  }

  clicked() {
    if (mouseX >= this.x && mouseX <= this.x + (width * 0.15) && mouseY >= this.y && mouseY <= this.y + (width * 0.20)) {
      this.selected = true;
      
      if (this.selected == true && this.winCard == false) {
        tries--;
        document.getElementById("lives").innerHTML = "tries remaining: " + tries;
      }
    }
  }
  
  display() {
    if (this.selected == false || this.winCard == true) {
      rect(this.x, this.y, (width * 0.15), (width * 0.20), 10);
      noStroke();
      fill(this.c1, this.c2, this.c3);
    }
  }
}

function draw() {
  background('black');
  randomSeed(rand);

  // create 9 cards
  for (let y = (height * 0.07); y <= height; y = y + (height * 0.33)) {
    for (let x = (width * 0.1); x <= width; x = x + (width * 0.33)) {
      c1 = random(15, 255);
      c2 = random(15, 255);
      c3 = random(15, 255);
      cardArr.push(new Card(x, y, c1, c2, c3));
    }
  }
  
  for (let i = 0; i < 9; i++) {
    if (i == pickedCard) {
      cardArr[i].setWin();
    }
  }  
  cardArr[0].display();
  cardArr[1].display();
  cardArr[2].display();
  cardArr[3].display();
  cardArr[4].display();
  cardArr[5].display();
  cardArr[6].display();
  cardArr[7].display();
  cardArr[8].display();
  
  winGame();
  loseGame();

  // DELETE LATERRRRRRRRRR USED FOR TESTING
  // print(pickedCard);
}

function winGame() {
  for (let i = 0; i < 9; i++) {
    if (cardArr[i].getSelect() == true && cardArr[i].getWin() == true) {
      clear();      
      image(winImgArr[winArrIndex], cardArr[i].getX(), cardArr[i].getY(), (width * 0.15), (width * 0.20));
      document.getElementById("heading1").innerHTML = "you won !! yipee 🌟🌟";
      document.body.style.background = colorArr[colorIndex];
      
      for (let c = 0; c < 9; c++) {
        cardArr[c].setSelect();
      }
    }
  }
}

function loseGame() {
  if (tries <= 0) {
    clear();
    image(loseImgArr[loseArrIndex], (width * 0.075), (height * 0.05), (width * 0.85), (width * 0.95));
    document.getElementById("lives").innerHTML = "tries remaining: 0";
    document.getElementById("heading1").innerHTML = "BOO YOU LOSE";
  }
}

function mousePressed() {
  cardArr[0].clicked();
  cardArr[1].clicked();
  cardArr[2].clicked();
  cardArr[3].clicked();
  cardArr[4].clicked();
  cardArr[5].clicked();
  cardArr[6].clicked();
  cardArr[7].clicked();
  cardArr[8].clicked();
}
