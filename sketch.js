var playerPaddle;
var ball1,ball2,ball3,ball4,ball5,ball6;


function setup() { 
  createCanvas(400, 400);
  playerPaddle=createSprite(100,100,100,25);
  ballsGroup = createGroup(); 
}

function draw() {
playerPaddle.shapeColor=("green");
playerPaddle.y=mouseY;
playerPaddle.x=mouseX;
  background(220);
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + score/100);
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }