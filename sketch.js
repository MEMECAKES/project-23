const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerArcher,computerArcher;
var computerBase;
var computer;
var player,playerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  class computerbase {
constructor(x,y,width,height){
  var options = {
    isSatic: true
  };

this.body = bodies.rectangle(x,y,width,height, options);
this.width = width;
this.height = height;
this.imagr = loadiamge("./assets/base2.png");

world.add(world, this.body);
}
  }
  
  
   playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
   player = new Player(285, playerBase.body.position.y - 153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   
   computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
} 
}

function draw() {
  background(180);

  Engine.update(engine);

  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    Push();
    Translate(pos.x, pos.y);
    rotate(angle);
    imagemode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

    Pop();

  }
 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


}
