//23:38
var col1=220;
var col2=220;
var col3=220;
var rec=[];
var row=0;
var col=0;
var block_l=10;
var block_w=7;
var ellx=450;
var elly=150;
var speedx=3;
var speedy=3;
var cont=-1;
var rey=[];
var rex=[];
var reh=[];
var rew=[];
var position_planter=-1;
var score=0;
var ranb1;
var ranb2;
var ranb3;
var er1;
var er2;
var er3;
var er4;
//block width=[[[[((width-(20+(10*block_w)))/block_w)]]]]
//block height=5
//block x position=((((loop's width limit var)%(block_w)))*(((width-(20+(10*block_w)))/block_w)+(10*(loop's width limit var+1))))
function setup() {
  createCanvas(650,650);
  for(var i=0;i<30;i++)
  rec[i]=1;
  var ranb1=random(100,250);
  var ranb2=random(100,250);
  var ranb3=random(100,250);
  er1=random(0,width);
  er2=random(0,height);
  er3=random(0,width);
  er4=random(0,height);
}




function draw() 
{

   //Hiding The mouse cursor
   if(mouseX<650&&mouseX>0&&mouseY<650&&mouseY>0)
	{
	   noCursor();
	}
  //INPUTTING POSITIONS COORDINATES
  if(cont==-1)
  {
    for(var i=0;i<block_l*block_w;i++)
    {
    rec[i]=1;
    if(position_planter==-1)
    {
    for(var i=0;i<block_l;i++)
    {
      for(var j=0;j<block_w;j++)
      {
         rex[position_planter]=(((((j)%(block_w)))*(((width-(20+(10*block_w)))/block_w)+(10)))+10);
         rey[position_planter]=(10+(12*i));
         reh[position_planter]=10;
         rew[position_planter]=((width-(20+(10*block_w)))/block_w);
         position_planter++;
        }
    }
    position_planter=0;
    }
    }
        cont=1;
  }
  background(col1,col2,col3);
    fill(80,80,80);
//CHECKING AND DRAWING
strokeWeight(1.5);
for(var i=0;i<block_l;i++)
{
  for(var j=0;j<block_w;j++)
  {
    if(rec[position_planter]==1)
    {
    fill(200,120,250);
    rect(rex[position_planter],rey[position_planter],rew[position_planter],reh[position_planter]);
    }
    position_planter++;
  }
}
position_planter=0;
strokeWeight(1);


//BOUNCING OFF PLATE
if((elly>=615)&&(elly<=625)&&(ellx>=mouseX-50)&&(ellx<=(mouseX+50)))
 {
   speedy=speedy*(-1);
   speedx=(-1)*(mouseX-ellx)*(9/50);
 }
//BREAKING A BRICK
for(var i=0;i<(block_l*block_w);i++)
{
  if(rec[i]==1)
  {
    if(((ellx+5)>=rex[i])&&(ellx-5)<=(rex[i]+rew[i])&&(elly+5)>=rey[i]&&(elly-5)<=(rey[i]+reh[i]))
    {
      rec[i]=0;
      speedy=(-1)*speedy;
      col1=random(100,250);
      col2=random(100,250);
      col3=random(100,250);
      ranb1=random(100,250);
      ranb2=random(100,250);
      ranb3=random(100,250);
      score=score+1;
    }
  }
}
if(elly>=640)
{
    cont=-1;
    score=0;
    elly=300;
    speedx=5;
}
  cont=0;
    ellx=ellx+speedx;
    elly=elly+speedy;
    if(ellx>=640||ellx<=10)
      speedx=speedx*(-1);
    if(elly<=10)
      speedy=speedy*(-1);
    textSize(30);
    fill(0);
    text("Score "+score,500,600,100);
    fill(250,150,50);
    if(mouseX<600&&mouseX>50)
    rect(mouseX-50,620,100,5);
    else if(mouseX<600)
    rect(0,620,100,5);
    else
    rect(550,620,100,5);
    fill(ranb1,ranb2,ranb3);
    strokeWeight(7);
    ellipse(ellx,elly,20,20);
    noFill();
    strokeWeight(10);
    rect(2.5,2.5,642,645);
    strokeWeight(1);
  }
  function mousePressed()
  {
    cont=-1;
    score=0;
    
  }
