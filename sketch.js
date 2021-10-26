var leviStandingImg;
var leviJumpingImg;
var TitanImg;
var Bg;
function preload(){
  leviJumpingImg = loadImage("images/leviJumping.png");
  leviStandingImg = loadImage("images/leviStanding.png");
  TitanImg = loadImage("images/TitanImg.png");
  Bg = loadImage("images/Background.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background("black");  
  drawSprites();
}