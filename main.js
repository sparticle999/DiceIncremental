var dice1Max = 3; var dice2Max = 3; var dice3Max = 3; var dice4Max = 3; var dice5Max = 3; var dice6Max = 3;
var dice2Unlock = false; var dice3Unlock = false; var dice4Unlock = false; var dice5Unlock = false; var dice6Unlock = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function rollDice(){
  dice1Roll = getRandomInt(dice1Max);
  document.getElementById("dice1").innerHTML = dice1Roll;
  if(dice2Unlock === true){
    dice2Roll = getRandomInt(dice2Max);
  }
  if(dice3Unlock === true){
    //
  }
  if(dice4Unlock === true){
    //
  }
  if(dice5Unlock === true){
    //
  }
  if(dice6Unlock === true){
    //
  }
}
