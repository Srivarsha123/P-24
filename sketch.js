
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(50, 30, 30)
    ground = new Ground(400, 690, 800, 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ball.display();
  ground.display();
}



