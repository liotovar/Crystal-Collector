$(document).ready(function() {

var randomNumTarget;
var randomNumChoice1;
var randomNumChoice2;
var randomNumChoice3;
var randomNumChoice4;
var totalCount;
initializeValues();
var wins = 0;
var losses = 0;

$("#randomNumber").html("<h1> " + randomNumTarget + "</h1>");


$("#option1").on("click", function() {
        //console.log("You chose the first option");
        totalCount +=randomNumChoice1;
        //console.log("Your total is " + totalCount);
        $("#currentScore").html("<h1> " + totalCount + "</h1>");
        checkWinOrLoss();
    });

$("#option2").on("click", function() {
        //console.log("You chose the second option");
        totalCount +=randomNumChoice2;
        //console.log("Your total is " + totalCount);
        $("#currentScore").html("<h1> " + totalCount + "</h1>");
        checkWinOrLoss();
    });

$("#option3").on("click", function() {
        //console.log("You chose the third option");
        totalCount +=randomNumChoice3;
        //console.log("Your total is " + totalCount);
        $("#currentScore").html("<h1> " + totalCount + "</h1>");
        checkWinOrLoss();
    });

$("#option4").on("click", function() {
        //console.log("you chose the fourth option");
        totalCount +=randomNumChoice4;
        //console.log("Your total is " + totalCount);
        $("#currentScore").html("<h1> " + totalCount + "</h1>");
        checkWinOrLoss();
    });

$("#winLoss").html("<h4><p> wins : <span id = 'winsTracker'>" + wins + "</span></p></h4>" +
				   "<h4><p> losses : <span id = 'lossesTracker'>" + losses + "</span></p></h4>");


 function checkWinOrLoss(){
 	if (totalCount === randomNumTarget) {
		wins++;
		//console.log("You won!", wins);
		$("#winsTracker").html(wins);
		restartGame();
	} else if (totalCount >= randomNumTarget){
		losses++;
		//console.log("You lost!", losses);
		$("#lossesTracker").html(losses);
		restartGame();
	}
 }

 function restartGame(){
 	initializeValues();
	$("#randomNumber").html("<h1> " + randomNumTarget + "</h1>");
	$("#currentScore").html("<h1> " + totalCount + "</h1>");
 }

 function initializeValues(){
	randomNumTarget = Math.floor((Math.random() * 102) + 19);
	randomNumChoice1 = Math.floor((Math.random() * 12) + 1);
	randomNumChoice2 = Math.floor((Math.random() * 12) + 1);
	randomNumChoice3 = Math.floor((Math.random() * 12) + 1);
	randomNumChoice4 = Math.floor((Math.random() * 12) + 1);
	totalCount = 0;
	// console.log(randomNumChoice1);
	// console.log(randomNumChoice2);
	// console.log(randomNumChoice3);
	// console.log(randomNumChoice4);
 }

});