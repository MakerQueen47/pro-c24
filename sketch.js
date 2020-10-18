
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1, paper1, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	dustbin1 = new Dustbin();

	ground1 = new Ground(400,670,800,15);

	paper1 = new Paper(100,300,50);

  
}


function draw() {

	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  dustbin1.display();	
  paper1.display();
  ground1.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:100, y:-100});

	}
}



