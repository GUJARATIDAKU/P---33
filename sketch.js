const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World= Matter.World;

var engine,world;
var backgroundimg,bg;
var snowfall;

var snow = [];

function preload(){
  backgroundimg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 // snow = new Snow(random(100,700),0,40);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(backgroundimg);  
  
  if(frameCount%20 === 0){
    snow.push(snowfall = new Snow());
  }
 

 for(var j = 0; j < snow.length;j++){
   snow[j].display();
 }
 //console.log(snow);
 //snow.display();
  //drawSprites();
}