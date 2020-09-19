const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,height-35,10,800)
}

function draw() {
  background(255,255,255); 
  ground.display(); 
  drawSprites();
}