function setup() 
{
createCanvas(400,400);  
}
var erx=40;
var ery=60;
var ed=1;
var eat=0;
var sx=20;
var sy=20;
var sd=1;
var ydir=3;
var xdir=3;
var score=0;
var b1=140;
var b2=60;
var b3=90;
var screenc=0;

function draw() 
{
background(b1,b2,b3);  
fill(50,260,60);
ellipse(sx,sy,10,10);if(sd==1)
{
line(sx,sy,sx-20,sy);
line(sx,sy-1,sx-20,sy-1);
sx=sx+xdir;
}
if(sd==-1)
{
line(sx,sy,sx,sy-20);
line(sx-1,sy,sx-1,sy-20);
sy=sy+ydir;
}
if(sy>390)
{
  sy=10;
}
if(sx>390)
{
  sx=10;
}

if(eat==1)
{erx=random(20,380);
ery=random(20,380);
b1=random(100,250);
b2=random(100,250);
b3=random(100,250);
erx=random(20,380);
ery=random(20,380);
b1=random(100,250);
b2=random(100,250);
b3=random(100,250);
eat=0;
score=score+1;
xdir=xdir*1.1;
ydir=ydir*1.1;
}
fill(50,250,250);
ellipse(erx,ery,20,20);

if(sx<(erx+10)&&sx>(erx-10)&&sy<(ery+10)&&sy>(ery-10))
{
  eat=1;
}noFill();strokeWeight(10);
rect(5,5,390,390);
fill(0);textSize(60);
text("Score-"+score,90,60);strokeWeight(3);
}


function mousePressed()
{
 sd=sd*(-1);
}
