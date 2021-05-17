var car, wall;

function setup() {
  createCanvas(800,400);
  wall = createSprite(200, 200, 50, 100);
  wall.shapeColor = "green"
  car = createSprite(400, 200, 80, 30);
  car1 = createSprite(700, 200, 80, 30);
  car.shapeColor = "red"
  car.velocityX = 5;
  car1.velocityX = -5
  car.velocityY = 5;
  car1.velocityY = -5
}

function draw() {
  background(0,0,0);  
  car.y = World.mouseY;
  car.x = World.mouseX;

  if(isTouching(car,car1)){
    car1.shapeColor = "blue"
    car.shapeColor = "blue";
  }
  else{
    car1.shapeColor = "green"
    car.shapeColor = "red"
  }

  //bouncing off
  

  //console.log(car.x-wall.x);
//isTouching();
  drawSprites();
}




