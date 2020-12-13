
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	createCanvas(480,657);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20);

  for(var k = 0; k <=width; k += 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,280));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  console.log(plinkos);

  ground.display();


  drawSprites();
 
}



