var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(200,200,50,50);

}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 3;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 3;
  }
drawSprites();
}




