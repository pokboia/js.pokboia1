//Variaveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Velocidade Da Bolinha

let velocidadexBolinha = 9;
let velocidadeyBolinha = 9;

//Variaveis Da Raquete

let xRaquete = 5;
let yRaquete = 150;
let raquetecomprimento =12
let raquetealtura = 90

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

//Variaveis Do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//colidiu

let colidiu = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostrarbolinha();
  movimentabolinha();
  bordabolinha();
  mostraraquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraraquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
}

function mostrarbolinha(){
   circle(xBolinha,yBolinha,diametro);
  
 }

function movimentabolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
  
}


function bordabolinha(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraraquete(x,y){
  rect(x,y,raquetecomprimento,raquetealtura);
}


function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play()
    }
}


function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadexBolinha *= -1;
      raquetada.play()
    }
}




function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }


}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(95, 158, 160));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(95, 158, 160));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);


  
  
}
function marcaPonto() {
    if (xBolinha > 580) {
        meusPontos += 1;
      ponto.play()
    }
    if (xBolinha < 15) {
        pontosDoOponente += 1;
      ponto.play()
    }
}