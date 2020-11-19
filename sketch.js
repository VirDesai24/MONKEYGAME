
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
 monkey=createSprite(80,320);
 monkey.addAnimation("running",monkey_running)
 monkey.scale=0.1

 ground=createSprite(200,350,900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2
}


function draw() {
  background("white");
 
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("Space")){
     monkey.velocityY=-10; 
    
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  Spawnbanana();
  Spawnstones();
  
  drawSprites();
}

function Spawnbanana(){
  if(frameCount%80===0){
   var banana=createSprite(400,300);
   banana.addImage(bananaImage);
   banana.y=Math.round(random(100,200));
   
   banana.velocityX=-5;
   banana.scale=0.1
  }
}

function Spawnstones(){
  if(frameCount%300===0){
  var stones=createSprite(400,320);
  stones.addImage(obstacleImage);
  stones.velocityX=-3;
  stones.scale=0.2;
  }
  
 
}





