var x1 = 200;
var y1 = 200;
var rot = 0.012;
var x2 = 0;
var y2 = 0;
var inc = 0;
var incspeed = 1.7;
var deg = 0;
var mp = 0;
var col1 = 210;
var col2 = 30;
var col3 = 110;
var xel = [-20];
var yel = [-20];
var bal = 3;
var catbx;
var catby;
var score = 0;

function setup() {
  createCanvas(400, 500);
  x1 = width / 2;
  y1 = (height - 100) / 2;
  x2 = width / 2 + 10;
  y2 = (height - 100) / 2;
}

function draw() {

  background(col1, col2, col3);
  fill(250, 40, 40);
  rect(0, 400, 400, 100);
  fill(250, 80, 80);
  rect(100, 400, 200, 100);
  fill(120);
  rect(190, 400, 20, 100);
  noFill(260);
  rect(1, 1, 397, 498);
  if (mouseX > 190 && mouseY > 400 && mouseX < 210 && mouseY < 500) {} else if (mouseX > 200 && mouseY > 400 && mouseX < 300 && mouseY < 500) {
    if(inc<250)
    inc = inc + incspeed;
  } else if (mouseX > 200 && mouseY > 400 && mouseX < 400 && mouseY < 500) {
    if(inc<250)
    inc = inc + incspeed + incspeed;
  } else if (mouseX < 200 && mouseY > 400 && mouseX > 100 && mouseY < 500) {
    if (inc > 10)
      inc = inc - incspeed;
  } else if (mouseX < 200 && mouseY > 400 && mouseX > 000 && mouseY < 500) {
    if (inc > 10)
      inc = (inc - incspeed) - incspeed;
  }
  if (mp == 1) {
    catbx = random(10, 390);
    catby = random(10, 390);
    for (var i = 0; i < bal; i++) {
      xel[i] = random(10, 390);
      yel[i] = random(10, 390);
    }
    if (score == 0) {
      rot = 0.012;
      incspeed = 1.7;
    } else {
      rot = rot + 0.004;
      incspeed = incspeed + 0.0566;
    }
    mp = 0;
  }
  fill(265, 0, 265);
  ellipse(catbx, catby, 20, 20);
  fill(250, 250, 50);
  textSize(60);
  strokeWeight(8);
  text("Score-" + score, 90, 60);
  for (var i = 0; i < bal; i++) {
    ellipse(xel[i], yel[i], 20, 20);
  }
  deg = deg + rot;
  x2 = x1 + inc * cos(-deg);
  y2 = y1 + inc * sin(-deg);
  fill(70, 100, 160);
  line(x1, y1, x2, y2);
  ellipse(x2, y2, 15, 15);
  if (dist(x2, y2, catbx, catby) <= (23)) {
    score++;
    col1 = random(100, 250);
    col2 = random(100, 250);
    col3 = random(100, 250);
    mp = 1;

  }
  for (var i = 0; i < bal; i++) {
    if (dist(x2, y2, xel[i], yel[i]) <= 23) {
      score = 0;
      col1 = random(100, 250);
      col2 = random(100, 250);
      col3 = random(100, 250);
      mp = 1;
    }
  }
}

function mousePressed() {
  mp = 1;
  score = 0;
}