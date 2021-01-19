var block1Group,block2Group,block3Group;
var ground;
var rand;
function setup() {
  createCanvas(800,400);
  block1Group = createGroup();
  block2Group = createGroup();
  block3Group = createGroup();
  ground = createSprite(400,380,800,20)
}

function draw() {
  background("lightblue");

 if(frameCount%100 == 0){
   rand= Math.round(random(1,3));
   console.log(rand);
 if(rand==1){
  block1();
 }
 else if(rand==2){
  //block2();
 }
 else if(rand==3){
 // block3();
 }
 }
 
  if(keyDown(RIGHT_ARROW)){
    block1Group.setVelocityEach(3,0);
     }
     if(keyDown(LEFT_ARROW)){
      block1Group.setVelocityEach(-3,0);
       }
       
   ground.shapeColor = "brown"
  
  block1Group.collide(ground);
  block2Group.collide(ground);
  block3Group.collide(ground);
  block1Group.collide(block2Group);
  block1Group.collide(block3Group);
  block2Group.collide(block3Group);
  drawSprites();
}

function block1(){
  var pin1 = createSprite(200,0,20,20);
  var pin2 = createSprite(220,0,20,20);
  var pin3 = createSprite(240,0,20,20);
  var pin4 = createSprite(200,20,20,20);
  var pin5 = createSprite(240,20,20,20);
  var pin6 = createSprite(220,20,20,20);
  pin5.visible=false;
  pin6.visible=false;
  block1Group.add(pin6);
  block1Group.add(pin5);
  block1Group.add(pin1);
  block1Group.add(pin2);
  block1Group.add(pin3);
  block1Group.add(pin4);
 block1Group.setVelocityYEach(3);
 pin1.shapeColor = "blue"
 pin2.shapeColor = "red"
 pin3.shapeColor = "pink"
 pin4.shapeColor = "light green"
 pin1.collide(pin2);
 pin2.collide(pin3);
 pin4.collide(pin1);
 pin5.collide(pin3);
 pin6.collide(pin2);
 pin4.collide(ground);
}
function block2(){
  var pin1 = createSprite(200,0,20,20);
  var pin2 = createSprite(220,0,20,20);
  var pin3 = createSprite(220,20,20,20);
  var pin4 = createSprite(200,20,20,20);
  pin1.shapeColor = "blue"
  pin2.shapeColor = "red"
  pin3.shapeColor = "pink"
  pin4.shapeColor = "light green"
  block2Group.add(pin1);
  block2Group.add(pin2);
  block2Group.add(pin3);
  block2Group.add(pin4);
 block2Group.setVelocityYEach(3);
 
 pin1.collide(pin2);
 pin2.collide(pin3);
 pin4.collide(pin1);
}
function block3(){
  var pin1 = createSprite(200,0,20,20);
  var pin2 = createSprite(220,0,20,20);
  var pin3 = createSprite(240,0,20,20);
  var pin4 = createSprite(260,0,20,20);
  block3Group.add(pin1);
  block3Group.add(pin2);
  block3Group.add(pin3);
  block3Group.add(pin4);
 block3Group.setVelocityYEach(3);
 pin1.shapeColor = "blue"
 pin2.shapeColor = "red"
 pin3.shapeColor = "pink"
 pin4.shapeColor = "light green"
 pin1.collide(pin2);
 pin2.collide(pin3);
 pin4.collide(pin1);

}
