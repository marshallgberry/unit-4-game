//var 
var winCount = 0;
var lossCount = 0;
var playerGuessSum = 0;



//randomNumber is displayed in "Winning Number"
var randomNumber = Math.floor(Math.random()*(120-19+1) + 19);

//puppies are given a random value
var randomValue = function(){
	return Math.floor(Math.random()*(12) + 1);
};

//variables set for random puppy values
var goldenDog = randomValue();
var poodleDog = randomValue();
var bulldogDog = randomValue();
var sheepDog = randomValue();

//"Winning Number" and "Puppy Total" counters to HTML
$("#winningNumber").html(randomNumber);
$("#puppyTotal").html(playerGuessSum);


//win and loss counters to HTML
function printToHTML(){
  var playerStat = "Player Statistics:" + "<br><br>" +
    "WINS: " + winCount + "<br>" +
    "LOSSES: " + lossCount + "<br>";
  $("#player-stats").html(playerStat);      
};
//iniitializing counters to html
printToHTML();

//game reset
var resetGame = function(){
  playerGuessSum = 0;
  randomNumber = Math.floor(Math.random()*(120-19+1) + 19);
  $("#winningNumber").text(randomNumber);
  $("#puppyTotal").html(playerGuessSum);
  //reset all puppy values to random
  goldenDog = randomValue();
  poodleDog = randomValue();
  bulldogDog = randomValue();
  sheepDog = randomValue();
};

//function to pass puppy value through conditionals
function checkValueUnder(puppyValue){
  //initialize first puppy value on click
  playerGuessSum += puppyValue;
  //puppy value through conditionals
  if (playerGuessSum < randomNumber){
    $("#puppyTotal").text(playerGuessSum);      
  } else if (playerGuessSum === randomNumber){
    winCount += 1;
    $("#puppyTotal").text(playerGuessSum);
    printToHTML();
    resetGame();
  } else {
    lossCount +=1;
    $("#puppyTotal").text(playerGuessSum);
    printToHTML();
    resetGame();    
  };
}

//user clicks on a puppy with a random value
//puppy value is displayed in "Puppy Total"
//there is a puppy bark when a puppy is clicked
$("#golden").click(function(){
  puppybark.play();
	checkValueUnder(goldenDog);
});

$("#poodle").click(function(){
  puppybark.play();
	checkValueUnder(poodleDog);
});

$("#bulldog").click(function(){
  puppybark.play();
	checkValueUnder(bulldogDog);
});

$("#sheepdog").click(function(){
  puppybark.play();
	checkValueUnder(sheepDog);
});
