
var backgroundImg, background;
var eagleImg, eagle, eaglesGroup;
var squirrel, squirrelImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
function preload(){
    backgroundImg = loadImage("background.png");
    eagleImg = loadImage("eagle.png");
    squirrelImg = loadImage("squirrel.png");

}

function setup() {
  createCanvas(600,600);
  background  = createSprite(300,300);
  background.addImage("background",backgroundImg);
  background.velocityY = 1;

  eaglesGroup = new Group();
 
  invisibleBlockGroup = new Group();
  squirrel = createSprite(25,470,50,50);
  squirrel.scale = 0.2;
  squirrel.addImage("squirrel", squirrelImg);
}





function draw() {
    
    if (gameState === "play") {
        if(keyDown("left_arrow")){
          squirrel.x = squirrel.x - 3;
        }
        
        if(keyDown("right_arrow")){   
          squirrel.x = squirrel.x + 3;
        }
        
        if(keyDown("space")){
          squirrel.velocityY = -5;
        }
        
        squirrel.velocityY = squirrel.velocityY + 0.5
        
        if(background.y > 400){
          background.y = 300
        }
        spawnEagles();
    
        
        //eaglesGroup.collide(squirrel);
        if(eaglesGroup.isTouching(squirrel)){
          squirrel.velocityY = 0;
        }
        if(invisibleBlockGroup.isTouching(squirrel) || squirrel.y > 600){
          squirrel.destroy();
          gameState = "end"
        }
        
        drawSprites();
      }
      if (gameState === "end"){
        stroke("yellow");
        fill("red");
        textSize(30);
        text("Game Over", 230,250)
      }
    
}
function spawnEagles() {
  //write code here to spawn the eagles in the background
  if (frameCount % 240 === 0) {
    var eagle = createSprite(200, -50);
    
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = eagle.width;
    invisibleBlock.height = 2;
    
    eagle.x = Math.round(random(120,400));
    eagle.x = eagle.x;
    eagle.scale = 0.3;
    invisibleBlock.x = eagle.x;
    
    eagle.addImage(eagleImg);
    eagle.addImage(eagleImg);
    
    eagle.velocityY = 1;
    eagle.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    squirrel.depth = eagle.depth;
    squirrel.depth +=1;
   
    //assign lifetime to the variable
    eagle.lifetime = 800;
    eagle.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //add each eagle to the group
    eaglesGroup.add(eagle);
    
    eaglesGroup.add(eagle);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

  