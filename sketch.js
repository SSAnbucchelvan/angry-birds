const engine=Matter.Engine;
const world=Matter.World;
const bodies=Matter.Bodies;

var myEngine,myWorld;
var ball,ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;



function setup() {
  createCanvas(1200,400);
  myEngine=engine.create();
  myWorld=myEngine.world;
  
  var ground_options={
     isStatic:true
  }


  ground=bodies.rectangle(600,390,1200,20,ground_options);
  world.add(myWorld,ground);
  var ball_options={
    isStatic:false,
    restitution:1.0
 }


 ball=bodies.circle(100,100,20,ball_options);
 world.add(myWorld,ball);

box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);

pig1=new Pig(810,350);

log1=new Log(810,260,300,PI/2);

box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);

pig2=new Pig(810,220);

log2=new Log(810,180,300,PI/2);

box5=new Box(810,160,70,70);

log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,6*PI/7);


}

function draw() {
  background("blue");  
 engine.update(myEngine);

 rectMode(CENTER);

 rect(ground.position.x,ground.position.y,1200,20);

 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20,20);

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

 pig1.display();
 pig2.display();

 log1.display();
 log2.display();
 log3.display();
 log4.display();
}