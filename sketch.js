var mrect,frect;

function setup() {
 
  createCanvas(400,400);
 
 
  mrect=createSprite(400, 200, 50, 50);
  mrect.shapeColor="green";
  mrect.velocityX=-2;

  frect=createSprite(200,200,50,50);
 frect.shapeColor="yellow";
 frect.velocityX=2;
}

function draw() {
 
  background(255,255,255);  
 
 
 // mrect.y=World.mouseY;
 // mrect.x=World.mouseX;
 
 if(mrect.x-frect.x<mrect.width/2+frect.width/2&& frect.x-mrect.x<frect.width/2+mrect.width/2){
  //mrect.y-frect.y<mrect.height/2+frect.height/2&&frect.y-mrect.y<frect.height/2+mrect.height/2)  
mrect.velocityX=mrect.velocityX*(-1);
frect.velocityX=frect.velocityX*(-1);
 
 }

  drawSprites();
}