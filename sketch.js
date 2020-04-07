var startBackgroundImg, startBackgroundImg2, sky, character, book;
var form, state1, state, name, database, player, game;
var gamestate = 0;
var distanceTravelled = 0;
var time = 0;
var max_Boost = 200;
var max_Engine = 200;
var crustImg, lithosphereImg, astenosphereImg, mantleImg, outercoreImg, innercoreImg;
var volcanoZone, no, eruption0, eruption1, eruption2, eruption3, eruption4;
var stormZone;
var smiley, danger;
var playerInfo = [];
var playerScore;
var playerName;

function preload(){
  frameRate(60);
  startBackgroundImg = loadImage("images/volcano.jpg");
  startBackgroundImg2 = loadImage("images/hurricane.jpg");

  crustImg = loadImage("images/crust.jpg");
  lithosphereImg = loadImage("images/lithosphere.jpg");
  astenosphereImg = loadImage("images/astenosphere.jpg");
  mantleImg = loadImage("images/mantle.jpg");
  outercoreImg = loadImage("images/outercore.jpg");
  innercoreImg = loadImage("images/innercore.jpg");

  sky = loadImage("images/sky.jpg");
  character = loadImage("images/character.png");
  book = loadImage("images/book.png");

  no = loadImage("images/no.png");
  eruption0 = loadImage("images/eruption0.png");
  eruption1 = loadImage("images/eruption1.png");
  eruption2 = loadImage("images/eruption2.png");
  eruption3 = loadImage("images/eruption3.png");
  eruption4 = loadImage("images/eruption4.png");
  smiley = loadImage("images/smiley.png");
  danger = loadImage("images/danger.png");
}

function setup(){
  frameRate(60);
  createCanvas(displayWidth-10,displayHeight-120);

  database = firebase.database();

  player = new Player();
  form = new Form();
  state = new State();
  state1 = new State1();
  game = new Game();

  volcanoZone = new VolcanoZone();
  stormZone = new StormZone();
  stormZone.optionList();
}

function draw(){
  if(gamestate<1){
  frameRate(0.75)
  push();
  var rand = round(random(0,1));
  

  switch(rand){
    case 0 : background(startBackgroundImg);
    break;
    case 1 : background(startBackgroundImg2);
    break;
  }
  pop();
}

  if(max_Boost<200){
    max_Boost+=2;
  }

  player.update();
  player.getCount();

 if(gamestate===0)
  form.display1();

  

 if(gamestate<1){
  volcanoZone.hide();
  state1.hide();
  stormZone.hide();
 }

 if(gamestate>0){
  frameRate(60);
  background(0);
  form.hide();
 }

 if(gamestate===1){
  volcanoZone.show();
  state1.show();
  stormZone.show();
  state1.display();
  volcanoZone.display();
  volcanoZone.checkLocality();
  stormZone.display();
  checkLocalityForCyclones();
 }

 if(gamestate === 2){
  state1.hide();
  volcanoZone.hide();
  stormZone.hide();
 }

 if(gamestate === 2){
   if(max_Engine>0){
    game.display();
    game.control();
   }
   else if(max_Engine<0.11){
     state.update(3);
     player.score = floor(((distanceTravelled/time)+distanceTravelled)/2)
   }
   

  if(frameCount%60 == 0){
    time+=1;
  }
   
  textSize(28);
  fill(255);
  distanceTravelled = player.distance/30;
  text(floor(distanceTravelled)+' KM',200,camera.position.y-displayHeight/3);
 } 

 if(gamestate === 3){
  frameRate(60);
  background(255);
  leaderboard();
}
}

function showBook(){

}

function leaderboard(){
  for(var i = 1; i<player.index+1; i++){
  
    fill(0,0,255);
    stroke(0);
    rectMode(CENTER);
    rect(displayWidth/2,player.distance+50+i*200,displayWidth,100);
    
  
    database.ref('players/player'+i+'/score').on("value",(data)=>{
      playerScore = data.val();
    });
    database.ref('players/player'+i+'/name').on("value",(data)=>{
      playerName = data.val();
  });

  if(playerName!= undefined && playerScore != undefined){
    playerInfo[i-1] = {
      score: playerScore,
      name: playerName
    };
  }

    playerInfo.sort(function(a,b){
      return b.score-a.score;
    });
  
    fill(255);
    textStyle(BOLD);
    textSize(20);
    console.log(playerInfo);

  if(i>1){
    if(playerInfo[i-1] != undefined && playerInfo[i-1].name!=playerInfo[i-2].name){
      text(playerInfo[i-1].name + ' : ' +playerInfo[i-1].score,300,player.distance+70+i*200);
   }
  }

   else{
    if(playerInfo[i-1] != undefined){
     text(playerInfo[i-1].name + ' : ' +playerInfo[i-1].score,300,player.distance+70+i*200);
  }
}
  
    if(keyIsDown(38)){
      if(camera.position.y>player.distance+50){
      camera.position.y-=5;
      }
    }
  
    if(keyIsDown(40)){
     camera.position.y+=5;
   }
  }
  }