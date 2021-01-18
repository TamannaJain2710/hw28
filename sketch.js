
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,COnstraint;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new Stone(300,300,10,5);
	COnstraint = new SlingShot(stoneObj.body,{x:300,y:300});
	
	//Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stoneObj.display();
  treeObj.display();
  mango1.display();
  COnstraint.display();
  groundObject.display();
}
