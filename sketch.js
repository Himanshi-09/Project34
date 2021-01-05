//Create variables here

function preload()
{
  dog1 = loadImage('../images/dogImg.png');
  dog2 = loadImage('../images/dogImg1.png');
	//load images here
}

function setup() {
  createCanvas(600, 600);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on('value',readStock);
  dog = createSprite(300,300,20,20);
  dog.addImage('standing',dog1);
  dog.scale = 0.2;
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x =0;
  }
  else{
    x = x -1
  }
  database.ref('/').update({
    Food:x
  })
}
function draw() {  
  background('lightgreen');
  fill ('black');
  text('Note: Press UP_AAROW key to find drago milk!',165,20);
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage('Happy',dog2);
}
}



