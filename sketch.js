
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rock, hammer, rubber



function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(width/2,height-50,width,50);
	rock = new Rock(200,200,50,50);
	
	hammer = new Hammer(100,200,20,60);
	rubber = new Rubber(500,200,50);
}


function draw() {
 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  ground.display();
  rock.display();
  hammer.display();
  rubber.display();
  
  drawSprites();
 
}



