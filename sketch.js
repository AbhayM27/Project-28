
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boyIMG,ground,slingshot;


function preload()
{
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,700,800,20);
	stone1 = new Stone(50,600,20);
	tree1 = new Tree(550,480,0,0);
	mango1 = new Mango(500,380,40);
	mango2 = new Mango(550,450,40);
	mango3 = new Mango(450,330,40);
	mango4 = new Mango(600,300,40);
	mango5 = new Mango(750,450,40);
	mango6 = new Mango(450,480,40);
	mango7 = new Mango(700,350,40);
	slingshot = new Slingshot(stone1.body,{x:50,y:600});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  image(boyIMG,10,555,180,180);
	
 
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();
  slingshot.display();

	detectCollision(stone1,mango1); 
	detectCollision(stone1,mango2); 
	detectCollision(stone1,mango3); 
	detectCollision(stone1,mango4); 
	detectCollision(stone1,mango5); 
	detectCollision(stone1,mango6); 
	detectCollision(stone1,mango7); 

	
  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});

}

function mouseReleased() {
	slingshot.fly();

}

function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		
		if(distance <- lmango.r + lstone.r) {
			Matter.Body.setStatic(lmango.body, false); // mango is not dropping fix this
		}

}

function keyPressed() {
	if(keyCode === 32) {
		slingshot.attach(stone1.body); /// fix this
	}



}

