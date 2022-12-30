var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //crear sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar escala y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -4;


  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(220);
  
    
 
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
 
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //evitar que el Trex caiga 
  trex.collide(invisibleGround);
  drawSprites();
}
