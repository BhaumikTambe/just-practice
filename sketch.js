
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var SurvivalTime = 0;


// PRELOAD
function preload(){
  // Monkey Image
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  // Banana Image
  bananaImage = loadImage("banana.png");
  // Obctacles Image
  obstaceImage = loadImage("obstacle.png");
 
}


// SETUP
function setup() {
  createCanvas(800,500);
 
  // Monkey
  monkey = createSprite(100,400,20,20);
  monkey.addAnimation("M",monkey_running);
  monkey.scale = 0.18;
  
  // ground
  ground = createSprite(600,445,10000,10);
  ground.velocityX = -100;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

// DRAW
function draw() {
  background("skyblue");
  //monkey jumping
  if(keyDown("space")&& monkey.y >= 370) {
    monkey.velocityY = -20;
    }
  //gravity
  monkey.velocityY =  monkey.velocityY + 0.82;
  
  //scrolling the ground
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  Food();
  obs();
  monkey.collide(ground);
  
  drawSprites();

  //survival time
   SurvivalTime = Math.round(frameCount/frameRate());
  fill("black");
  textSize(24);
  text("Survival Time:"+ SurvivalTime,250,50);
}

// BANANA 
function Food() {
  if(World.frameCount%70===0){
    banana = createSprite(800,100,10,10);
    banana.addImage("B", bananaImage);
    banana.velocityX = -10;
    banana.scale = 0.15;
    banana.y = Math.round(random(70,200));
    banana.lifetime = 80;
    banana.setCollider("rectangle",0,0,500,350);
    //banana.debug = true;
    FoodGroup.add(banana);
  }
}

// OBSTACLE
function obs() {
  if(World.frameCount%200 === 0){
    obstacle = createSprite(800,410,10,10);
    obstacle.addImage("O",obstaceImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.2;
    obstacle.lifetime = 180;
    obstacle.setCollider("circle",0,0,250);
    //obstacle.debug = true;
    obstacleGroup.add(obstacle);
  }
}