var thickness;
var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);


  weight = random(50,52);
  speed = random(223,321);
  thickness =random(22,82);

  bullet = createSprite(50,200,30,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(0,0,0);  


  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damge=0.5 *weight*speed*speed/(thickness*thickness*thickness);

    if(damge>10){
      wall.shapeColor= "cyan";
    }
    if(damge<10){
      wall.shapeColor="red";
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
  
