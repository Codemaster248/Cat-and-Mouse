var Tom,jerry;
var Tomimg,jerryimg,backgroundimg,background;
var Tomimg2,jerry2,Tomimg3;



function preload() {
   Tomimg=loadImage("images/cat1.png");
   jerryimg=loadImage("images/mouse1.png");
   backgroundimg=loadImage("images/garden.png")
   Tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
   Tomimg3=loadAnimation("images/cat4.png")
   jerry2=loadAnimation("images/mouse2.png","images/mouse3.png ")
   //load the images here
}

function setup(){
    createCanvas(1000,800);
    background(255);
    background=createSprite(500,400,100,800);
    background.addImage("background",backgroundimg);
    background.scale=1

    Tom=createSprite(920,620,10,10);
    Tom.addImage("Tom1",Tomimg);
    Tom.scale=0.1;
    
    jerry=createSprite(250,620,10,80);
    jerry.addImage("jerry1",jerryimg)
    jerry.scale=0.1;

 
    //create tom and jerry sprites here

}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    if (Tom.x - jerry.x <(Tom.width - jerry.width)/2 ) {
     Tom.velocityX=0;
     Tom.addAnimation("tomrelax",Tomimg3);
     Tom.changeAnimation("tomrelax")
    }

    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW) {
    Tom.velocityX = -5;


 

    } 

  //For moving and changing animation write code here
  Tom.addAnimation("catRunning",Tomimg2);
  Tom.changeAnimation("catRunning");
  
  jerry.addAnimation("jerryteasing",jerry2);
    jerry.changeAnimation("jerryteasing");
}

