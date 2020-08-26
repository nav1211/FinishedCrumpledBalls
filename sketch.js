
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,bucket1,bucket2,bucket3;

function preload(){
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,600);
	ground1 = new Ground(800,685,1600,30);
	bucket1 = new Bucket(650,650,250,20);
	bucket2 = new Bucket(785,600,20,80);
	bucket3 = new Bucket(515,600,20,80);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //displaying the bodies
  paper1.display();
  ground1.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();

  Body.setStatic(bucket1.body, true);
  Body.setStatic(bucket2.body, true);
  Body.setStatic(bucket3.body, true);

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:190,y:-190});

	}

}

