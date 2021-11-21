const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(1300, 620);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1100, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  x1 = 600;
  x2 = 700;
  x3 = 800;
  x4 = 900;
  y1 = 100;
  y2 = 200;
  width1 = 60;
  height1 = 50;

  box1 = new Box(x1, y2, width1, height1);
  box2 = new Box(x4, y2, width1, height1);
  box3 = new Box(x4, y2, width1, height1);
  box4 = new Box(x4, y2, width1, height1);
  box5 = new Box(x4, y2, width1, height1);
  box6 = new Box(x4, y2, width1, height1);
  box7 = new Box(x3, y2, width1, height1);
  box8 = new Box(x3, y2, width1, height1);
  box9 = new Box(x3, y1, width1, height1);
  box10 = new Box(x3, y2, width1, height1);
  box11 = new Box(x3, y2, width1, height1);
  box12 = new Box(x3, y2, width1, height1);
  box13 = new Box(x3, y1, width1, height1);
  box14 = new Box(x3, y2, width1, height1);
  box15 = new Box(x2, y2, width1, height1);
  box16 = new Box(x2, y2, width1, height1);
  box17 = new Box(x2, y1, width1, height1);
  box18 = new Box(x2, y1, width1, height1);
  box19 = new Box(x2, y1, width1, height1);
  box20 = new Box(x2, y1, width1, height1);
  box21 = new Box(x1, y1, width1, height1);
  box22 = new Box(x1, y1, width1, height1);
  box23 = new Box(x1, y1, width1, height1);
  box24 = new Box(x1, y1, width1, height1);
  box25 = new Box(x1, y1, width1, height1);
  box26 = new Box(x1, y1, width1, height1);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}