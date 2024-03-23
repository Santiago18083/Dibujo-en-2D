let imagenFondo
let x = 0

function preload() {
  imagenFondo = loadImage ('./images/Fondo.jpg');
}

function setup() {
  createCanvas(1280, 800);
}

function draw() {
  // put drawing code here
  background(255,255,255);
  image(imagenFondo,x,0)
  image(imagenFondo,imagenFondo.width + x,0)
  x = x - 1
  if (x < -imagenFondo.width) {
    x = 0
  }

  fill(235,158,117)
  rect(490,570,30,190) //Pata Delantera
  rect(675,570,30,190) //Pata Trasera 
  rect(770,560,8,180) //Cola
  circle(774,740,8)

  fill('#FFDC68')
  rect(520,480,200,130) //Panza
  arc(720, 545, 130, 130, 180, PI)
  arc(525, 545, 130, 130, 0, 250)
  rect(520,510,40,250) //Pata Delantera
  rect(705,570,40,190) //Pata Trasera 
  rect(460,310,50,245) //Cuello

  fill(235,158,117)
  circle(460,172,25)
  circle(510,172,25)
  rect(454,250,12,-70) //Cuernos
  rect(504,250,12,-70) //Cuernos

  rotate(PI/4)
  fill(235,158,117)
  rect(425,-143,60,34) //Oreja Fondo
  fill(250,228,170)
  rect(425,-137,60,22)
  rotate(PI*2-PI/4)
  fill(235,158,117)
  circle(393,215,35)
  fill(250,228,170)
  circle(400,222,22)
  rotate((PI/4)*3)
  fill(235,158,117)
  rect(-255,-576,60,34) //Oreja Derecha Fondo
  fill(250,228,170)
  rect(-260,-570,60,22)
  rotate(PI+PI/4)
  fill(235,158,117)
  circle(575,215,35)
  fill(250,228,170)
  circle(567,223,22)

  fill('#FFDC68')
  circle(485,275,130)  //Cabeza
  
  fill(0)
  circle(450,270,18) //Ojos
  circle(520,270,18) 
  
  fill(250,228,170)
  circle(485,350,135) //Boca

  fill(235,158,117) 
  circle(464,320,20) //Poros  
  circle(505,320,20) //Poros 

  noFill()
  stroke(235,158,117)
  strokeWeight(5)
  arc(485,355, 60, 60, 0, PI) //Boca pasto
  noStroke()

  fill(235,158,117)
  arc(680,760, 45, 45, PI, 0) //Pata cafe trasera
  arc(495,760, 45, 45, PI, 0) //Pata cafe delantera

  fill(250,228,170)
  arc(705,760, 45, 45, PI, 0) //Pata amarilla trasera
  arc(520,760, 45, 45, PI, 0) //Pata amarilla delantera

  fill(235,158,117)  //Manchas
  circle(583,530,80)
  circle(515,515,35)
  circle(525,550,20)
  circle(690,545,20)
  circle(705,575,35)
  circle(755,555,20)
  circle(740,500,30)
  arc(460,470,40,40,PI + HALF_PI,HALF_PI)
  arc(510,440,40,40,HALF_PI,PI + HALF_PI)

  console.log(mouseX,mouseY)
}
