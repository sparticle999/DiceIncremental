var dice1Max = 3; var dice2Max = 3; var dice3Max = 3; var dice4Max = 3; var dice5Max = 3; var dice6Max = 3;
var dice2Unlock = false; var dice3Unlock = false; var dice4Unlock = false; var dice5Unlock = false; var dice6Unlock = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function rollDice(){
  dice1Roll = getRandomInt(dice1Max);
  document.getElementById("dice1Roll").innerHTML = dice1Roll;
  if(dice2Unlock === true){
    dice2Roll = getRandomInt(dice2Max);
    document.getElementById("dice2Roll").innerHTML = dice2Roll;
  }
  if(dice3Unlock === true){
    dice3Roll = getRandomInt(dice3Max);
    document.getElementById("dice3Roll").innerHTML = dice3Roll;
  }
  if(dice4Unlock === true){
    dice4Roll = getRandomInt(dice4Max);
    document.getElementById("dice4Roll").innerHTML = dice4Roll;
  }
  if(dice5Unlock === true){
    dice5Roll = getRandomInt(dice5Max);
    document.getElementById("dice5Roll").innerHTML = dice5Roll;
  }
  if(dice6Unlock === true){
    dice6Roll = getRandomInt(dice6Max);
    document.getElementById("dice6Roll").innerHTML = dice6Roll;
  }
}
