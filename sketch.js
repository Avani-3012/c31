
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //plinkos
  for(var k = 0;k<=width; k = k+80 ){
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
}
 for(var j = 40; j < width; j=j+50){
  plinkos . push(new plinko(j, 75) );
 }
 for (var j = 15; j <=width-10; j-j+50){
  plinkos . push(new plinko(j, 175) );
 }

 //particles
 for (var j = 0; j < particles. length; j++) {
  particles [j] . display() ;
 }
 //divisions
 for (var k = 0; k < divisions . length; k++) {
  divisions [k].display() ;
 }
  if(frameCount%60 ===0) {
    particles.push (new particle(random(width/2-10, width/2+10), 10,10));
  }

  ground1 = new Ground(width/2, height-35, width,10)

  Engine.run(engine);
}

function draw() {
  background("black");  
  Engine.update(engine);
 
  ground1.display();
  
  //plinkos
  for(var k = 0;k<=width; k = k+80 ){
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
}
 for(var j = 40; j < width; j=j+50){
  plinkos . push(new Plinko(j, 75) );
 }
 for (var j = 15; j <=width-10; j-j+50){
  plinkos . push(new Plinko(j, 175) );
 }

 //particles
 for (var j = 0; j < particles. length; j++) {
  particles [j] . display() ;
 }
 //divisions
 for (var k = 0; k < divisions . length; k++) {
  divisions [k].display() ;
 }
  if(frameCount%60 ===0) {
    particles.push (new particle(random(width/2-10, width/2+10), 10,10));
  }
  drawSprites();
}