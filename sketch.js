var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  




  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 100; j <=width-100; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  //crea la cuarta fila de objetos plinko
  for (var j = 150; j <=width-50; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //crea los objetos partícula
  particles= new Particle (50,50,80,80)
  particles1= new Particle (100,50,80,80)
  particles2= new Particle (150,50,80,80)
  particles3= new Particle (200,50,80,80)
  particles4= new Particle (250,50,80,80) 
  particles5= new Particle (300,50,80,80)
  particles6= new Particle (350,50,80,80)
  particles7= new Particle (400,50,80,80)
  particles8= new Particle (450,50,80,80)
  particles9= new Particle (500,50,80,80)
  particles10= new Particle (600,50,80,80)
  particles11= new Particle (650,50,80,80)
  particles12= new Particle (700,50,80,80)
  particles13= new Particle (750,50,80,80)
  particles14= new Particle (800,50,80,80)
  particles15= new Particle (850,50,80,80)




}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  particles.display();
  particles1.display();
  particles2.display();
  particles3.display();
  particles4.display();
  particles5.display();
  particles6.display();
  particles7.display();
  particles8.display();
  particles9.display();
  particles10.display();
  particles11.display();
  particles12.display();
  particles13.display();
  particles14.display();
  particles15.display();
  

}
