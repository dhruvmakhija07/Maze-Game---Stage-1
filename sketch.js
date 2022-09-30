var maze;
var mazesprite;

var player;
var playersprite;

var coin;
var coinsprite;

var coin2;
var coin2sprite;

var coin3;
var coin3sprite;

var coin4;
var coin4sprite;

var coin5;
var coin5sprite;

var diamond;
var diamondsprite;

var diamond2;
var diamond2sprite;

var banana;
var bananasprite;

var banana2;
var banana2sprite;

var apple;
var applesprite;

var apple2;
var apple2sprite;

var flag;
var flagsprite;

function preload(){
  maze = loadImage("assets/mazebg.png");
  playersprite = loadImage("assets/smiley.png");
  coinsprite = loadImage("assets/coin.png");
  coin2sprite = loadImage("assets/coin.png");
  coin3sprite = loadImage("assets/coin.png");
  coin4sprite = loadImage("assets/coin.png");
  coin5sprite = loadImage("assets/coin.png");
  diamondsprite = loadImage("assets/diamond.png");
  diamond2sprite = loadImage("assets/diamond.png");
  bananasprite = loadImage("assets/banana.png");
  banana2sprite = loadImage("assets/banana.png");
  applesprite = loadImage("assets/apple.png");
  apple2sprite = loadImage("assets/apple.png");
  flagsprite = loadImage("assets/flag.png");
}

function setup(){
  createCanvas(700,700);
  mazesprite = createSprite(350,350);
  mazesprite.addImage("maze",maze);
  
  player = createSprite(239,112,20,20);
  player.addImage("runner",playersprite);
  
  coin = createSprite(544,497,20,20);
  coin.addImage("coin",coinsprite);

  coin2 = createSprite(220,484,20,20);
  coin2.addImage("coin2",coin2sprite);
  
  coin3 = createSprite(431,278,20,20);
  coin3.addImage("coin3",coin3sprite);

  coin4 = createSprite(180,160,20,20);
  coin4.addImage("coin4",coin4sprite);

  coin5 = createSprite(105,598,20,20);
  coin5.addImage("coin5",coin5sprite);

  diamond = createSprite(295,270,20,20);
  diamond.addImage("diamond",diamondsprite);

  diamond2 = createSprite(180,102,20,20);
  diamond2.addImage("diamond",diamond2sprite);

  banana = createSprite(145,100,20,20);
  banana.addImage("banana",bananasprite);
  
  banana2 = createSprite(543,465,20,20);
  banana2.addImage("banana2",banana2sprite);

  apple = createSprite(270,386,20,20);
  apple.addImage("apple",applesprite);

  apple2 = createSprite(157.5,368,20,20);
  apple2.addImage("apple2",apple2sprite);

  flag = createSprite(515.5,619,20,20);
  flag.addImage("flag",flagsprite);
}

function draw(){
  background(83, 197, 127);
  
  player.scale = 0.055;
  mazesprite.scale = 1.5;
  coin.scale = 0.05;
  coin2.scale = 0.05;
  coin3.scale = 0.05;
  coin4.scale = 0.05;
  coin5.scale = 0.05;
  diamond.scale = 0.09;
  diamond2.scale = 0.09;
  banana.scale = 0.11;
  banana2.scale = 0.11;
  apple.scale = 0.045;
  apple2.scale = 0.045;
  flag.scale = 0.08;
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  textSize(20);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("AdventureScape: Level 1",40,40);

  textSize(14);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("Score:",575,25);
  
  textSize(14);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("Energy:",575,50);

  if(keyIsDown(LEFT_ARROW)){
    player.x -= 4.5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x += 4.5;
  }

  if(keyIsDown(UP_ARROW)){
    player.y -= 4.5;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.y += 4.5;
  }

  drawSprites();
}