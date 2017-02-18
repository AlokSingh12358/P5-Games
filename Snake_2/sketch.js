function setup() {
  createCanvas(400, 400);
}
var erx = 40;
var ery = 60;
var eat = 0;
var eatai = 0;
var sx = 20;
var sy = 20;
var aix = 20;
var aiy = 20;
var sd = 1;
var aid = 1;
var ydir = 2;
var xdir = 2;
var aixdir = 1;
var aiydir = 1;
var score = 0;
var aiscore = 0;
var b1 = 140;
var b2 = 60;
var b3 = 90;
var screenc = 0;

function draw() {
  background(b1, b2, b3);
  fill(50, 260, 60);



//player snake
  ellipse(sx, sy, 10, 10);
  if (sd == 1) {
    line(sx, sy, sx - 20, sy);
    line(sx, sy - 1, sx - 20, sy - 1);
    sx = sx + xdir;
  }
  if (sd == -1) {
    line(sx, sy, sx, sy - 20);
    line(sx - 1, sy, sx - 1, sy - 20);
    sy = sy + ydir;
  }
  if (sy > 390) {
    sy = 10;
  }
  if (sx > 390) {
    sx = 10;
  }




//ai snake
  ellipse(aix, aiy, 10, 10);
  if (aid == 1) {
    line(aix, aiy, aix - 20, aiy);
    line(aix, aiy - 1, aix - 20, aiy - 1);
    aix = aix + aixdir;
  }
  if (aid == -1) {
    line(aix, aiy, aix, aiy - 20);
    line(aix - 1, aiy, aix - 1, aiy - 20);
    aiy = aiy + aiydir;
  }
  if (aiy > 390) {
    aiy = 10;
  }
  if (aix > 390) {
    aix = 10;
  }


  if (eat == 1) {
    erx = floor(random(20, 380));
    ery = floor(random(20, 380));
    b1 = random(100, 250);
    b2 = random(100, 250);
    b3 = random(100, 250);
    eat = 0;
    score = score + 1;
    xdir=xdir*1.1;
    ydir=ydir*1.1;
  }
  if(eatai==1)
  {
    erx = floor(random(20, 380));
    ery = floor(random(20, 380));
    b1 = random(100, 250);
    b2 = random(100, 250);
    b3 = random(100, 250);
    eatai = 0;
    aiscore = aiscore + 1;
    xdir=xdir*1.1;
    ydir=ydir*1.1;
  }
  fill(50, 250, 250);
  ellipse(erx, ery, 20, 20);

  if (sx < (erx + 10) && sx > (erx - 10) && sy < (ery + 10) && sy > (ery - 10)) {
    eat = 1;
  }
  noFill();
  strokeWeight(10);
  rect(5, 5, 390, 390);
  fill(0);
  textSize(40);
  text("Human.Score-" + score, 100, 60);
  text("AI.Score-" + aiscore, 105, 90);
  strokeWeight(3);
  if(aix==erx&&aid==1)
  {
    aid=aid*(-1);
  }
  if(aiy==ery)
  {
    
  if(aix==erx)
    {
    eatai++;
    aid=aid*(-1);
    }
  }
  if(aix!=erx&&aiy!=ery&&aid==(-1))
  {
    aid=1;
  }
  }
  

function mousePressed() {
  sd = sd * (-1);
}