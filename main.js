var dice1Max = 3; var dice2Max = 3; var dice3Max = 3; var dice4Max = 3; var dice5Max = 3; var dice6Max = 3;
var dice2Unlock = false; var dice3Unlock = false; var dice4Unlock = false; var dice5Unlock = false; var dice6Unlock = false;
var dice1Roll = 0; var dice2Roll = 0; var dice3Roll = 0; var dice4Roll = 0; var dice5Roll = 0; var dice6Roll = 0;
var rollsLeft = 10;
var gold = 0; var xp = 0;
var salary= 0;

function refreshStats(){
    document.getElementById("rollsLeft").innerHTML = rollsLeft;
    document.getElementById("goldNum").innerHTML = gold;
    document.getElementById("xpNum").innerHTML = xp;
}

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
    //Calculates total rolled
    salary = dice1Roll + dice2Roll + dice3Roll + dice4Roll + dice5Roll + dice6Roll;
    document.getElementById("salary").className = "";
    document.getElementById("salaryGoldNum").innerHTMl = salary;
    gold += salary;
    xp += salary;
    
    //Calculates when a pair is made.
    
    rollsLeft -= 1;
    document.getElementById("rollsLeft").innerHTML = rollsLeft;
    if(rollsLeft === 0){
        restartGame();
    }
    refreshStats();
}

//Listens for key presses
//Check "http://keycode.info/" to find a keycode
window.onkeydown = function(e) {
        e.preventDefault();
        if (!e)
        {
            e = window.event;
        }
        var keyCode;
        if(e.which) {
            keyCode = e.which;
        } else {
            keyCode = e.keyCode;
        }
        if(keyCode === 82) {
            rollDice();
        }
}

function restartGame(){
    //Make this not an alert, but a popup div.
    alert("Restarting...");
    rollsLeft = 10;
    gold = 0;
    xp = 0;
    refreshStats();
}
