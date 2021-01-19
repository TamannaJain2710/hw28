const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var treeObj, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var elastic;
var boy;

function preload(){
	boy = loadImage("boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	  engine = Engine.create();
    world = engine.world

  mango1=new mango(1200,120,30);
  mango2=new mango(1100,200,30);
  mango3=new mango(1050,80,30);
  mango4=new mango(950,150,30);
  mango5=new mango(970,270,30);
  mango6=new mango(1200,270,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	  stone = new Stone(300,300,10,5);
   // elastic =  new SlingShot(stone.body, {x:280 , y:575});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stone.display();
  treeObj.display();
  treeObj.depth = mango5.depth
  treeObj.depth = treeObj.depth - 1
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
  //elastic.display();  
}
