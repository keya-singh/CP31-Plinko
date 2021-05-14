const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var division=[];
var plinko=[];
var particle=[];
//var backImage, backgr;

var divisionHeight = 300;


//function preload() {
// backImage = loadImage("backgr.png");
//  
//}

function setup() {
  createCanvas(800,750);
  //backgr = createSprite(0, 0, 800, 600);
 // backgr.addImage(backImage);

  engine = Engine.create();
    world = engine.world;


    

    ground = new Ground(600,height,1200,20);
    
   for (var k = 0; k <= width; k=k+80) {
     division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
     
   }

  for(var j=75; j <= width; j=j+50){
    plinko.push(new Plinko(j , 75));
  }

  for(var j=50; j <= width-10; j=j+50){
    plinko.push(new Plinko(j , 175));
  }

  for(var j=75; j <= width; j=j+50){
    plinko.push(new Plinko(j , 275));
  }

  for(var j=50; j <= width-10; j=j+50){
    plinko.push(new Plinko(j , 375));
  }



}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for ( var k = 0; k < division.length; k++) {
    division[k].display();
  }

  for ( var j = 0; j < plinko.length; j++) {
    plinko[j].display();
  }

  if (frameCount%60===0) {
    particle.push(new Particle(random(width/2-350, width/2+350),10, 10));
  }

  for ( var j = 0; j < particle.length; j++) {
    particle[j].display();
  }


  drawSprites();
}