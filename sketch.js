var wall,wall1,wall2 ;

var bullet,bullet1,bullet2;

var thickness,thickness1,thickness2;

var speed,speed1,speed2 ;

var weight ;

var line,line1;

function setup() {
  createCanvas(1600,400);


speed=random(223,321);
speed1=random(300,500);
speed2=random(400,650);
weight=random(30,52);
thickness=random(30,80);
thickness1=random(0,50);
thickness2=random(40,120);


bullet=createSprite(70,60,100,5);
bullet1=createSprite(70,200,100,5);
bullet2=createSprite(70,350,100,5);
wall=createSprite(1000,60,thickness1,100)
wall1=createSprite(1000,200,thickness,100)
wall2=createSprite(1000,340,thickness2,100)
line=createSprite(600,130,1200,5);
line1=createSprite(600,270,1200,5);



bullet.velocityX= 0;
bullet1.velocityX= 0;
bullet2.velocityX= 0;

}

function draw() {

  background(0);  

 
 

  bullet.shapeColor=color(255)
  bullet1.shapeColor=color(255)
  bullet2.shapeColor=color(255)
  wall.shapeColor=color(80,80,80)
  wall1.shapeColor=color(80,80,80)
  wall2.shapeColor=color(80,80,80)


  bullet.depth=wall.depth
  bullet.depth= wall.depth+1

  bullet1.depth=wall1.depth
  bullet1.depth= wall1.depth+1

  bullet2.depth=wall2.depth
  bullet2.depth= wall2.depth+1

   if(keyDown("space")){

      bullet.velocityX=speed;
   }

   if(keyDown ("space")){

    bullet1.velocityX=speed1;
 }

 if(keyDown("space")){

  bullet2.velocityX=speed2;
}

if(hasCollided(bullet,wall)){

bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){

  bullet.shapeColor=color(255,0,0)
}

if(damage<10){

  bullet.shapeColor=color(0,255,0)
}
}

if(hasCollided(bullet1,wall1)){

  bullet1.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10){
  
    bullet1.shapeColor=color(255,0,0)
  }
  
  if(damage<10){
  
    bullet1.shapeColor=color(0,255,0)
  }
  }

  if(hasCollided(bullet2,wall2)){

    bullet2.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
    
      bullet2.shapeColor=color(255,0,0)
    }
    
    if(damage<10){
    
      bullet2.shapeColor=color(0,255,0)
    }
  }

  drawSprites();
}
1




  
  function hasCollided(bullet,wall){

    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    
    if(bulletRightEdge>=wallLeftEdge){
    
    return true;
    
    }
    else{
    
      return false; 
    }
  }

    

  function hasCollided(bullet1,wall1){
  
  bullet1RightEdge=bullet1.x+bullet1.width;
  wall1LeftEdge=wall1.x;
  
  if(bullet1RightEdge>=wall1LeftEdge){
  
  return true;
  
  }
  else{
  
    return false; 
  }
}
  

  function hasCollided(bullet2,wall2){

    bullet2RightEdge=bullet2.x+bullet2.width;
    wall2LeftEdge=wall2.x;
    
    if(bullet2RightEdge>=wall2LeftEdge){
    
    return true;
    
    }
    else{
    
      return false; 
    }
  }