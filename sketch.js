var ball,ground,ballImage,dustbinImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  ballImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

     var options = {
		 
		 restitution : 0.3,
		 friction : 0.5,
		 density : 1.2
	 }

	 var ground_options = {
        isStatic  : true
	 }
     ball = Bodies.rectangle(100,180,40,40,options)
	World.add(world, ball);

	ground = Bodies.rectangle(400,680,800,20,ground_options);
	World.add(world,ground);


	base = new Dustbin(650,670,200,10);
	leftEdge = new Dustbin(550,620,20,100);
	rightEdge = new Dustbin(750,620,20,100);
    
      
	Engine.run(engine);  
}


function draw() {
     background("white");	
     imageMode(CENTER);
  image(ballImage,ball.position.x,ball.position.y,70,70);

    fill("white");
    rectMode  (CENTER);
    rect  (ground.position.x,ground.position.y,800,20);

  base.display();
  leftEdge.display();
  rightEdge.display();
   
imageMode(CENTER);
image(dustbinImage,650,560,240,250);
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
		
	}
}



