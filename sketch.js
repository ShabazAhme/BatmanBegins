const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;
  
   drop = new Drop(200,50);
   boy  = new Umb(200,650,200,300);
}

function draw(){
    background("black");
    Engine.update(engine);

    drop.display();
    boy.display();
    
    drawSprites();
}   

