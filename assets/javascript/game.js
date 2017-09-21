$(document).ready( function() {

//var timeLeft = 30;
//var intervalId;

//var correct = 0;
//var wrong = 0;
//var questionIndex = 0;

//var timeLeft = 30;


var questions = [
{
	"question": "The answer is a",
	"choices": ["a", "b", "c", "d"],
	"answer": 0
},

{
	"question": "The answer is b",
	"choices": ["a", "b", "c", "d"],
	"answer": 1
},

{
	"question": "The answer is c",
	"choices": ["a", "b", "c", "d"],
	"answer": 2
},

{
	"question": "The answer is d",
	"choices": ["a", "b", "c", "d"],
	"answer": 3
},

{
	"question": "The answer is a",
	"choices": ["a", "b", "c", "d"],
	"answer": 0
},
];

$("#start").on("click", function() {
	reset();
	askQuestion(questionIndex);
});

$(".answer-choice").on("click", function() {
	stopClock();
	var userChoice = $(this).text();
	//console.log(this);
	$("#game-display").hide();

	if (userChoice === $("#answer-key")){
		$("#correct-display").show();
		questionIndex++;
		correctDisplay();
	} else {
		$("#wrong-display").show();
		questionIndex++;
		wrongDisplay();
	} 
});





//Decrements time, displays to HTML, calls wrongDisplay when time hits 0
function clock() {
	timeLeft--;
	$("#clock").html(timeLeft);

	if (timeLeft <= 0) {
		$("#game-display").hide();
		$("#wrong-display").show();
		stopClock();
		wrongDisplay();
	}

}

//Sets interval for clock at 1 second, displays question and answer choices
function askQuestion(index) {
	timer = setInterval(clock, 1000);
	$("#question-container").text(questions[index].question);
	$("#a").html(questions[index].choices[0]);
	$("#b").html(questions[index].choices[1]);
	$("#c").html(questions[index].choices[2]);
	$("#d").html(questions[index].choices[3]);
	$("#answer-key").html(questions[index].answer);
	console.log($("#answer-key"));
}

//Shows correct answer screen and increments correctly answered questions by 1
function correctDisplay() {

	correct++;

	setTimeout(correctNext, 3000);

}

//Moves to next question after correct answer screen is shown
function correctNext() {
	questionIndex++;
	$("correct-display").hide();
	$("game-display").show();
	checkNext();
}

//Shows wrong answer screen and increments incorrectly answered questions by 1
function wrongDisplay() {

	wrong++;

	setTimeout(wrongNext, 3000);

}

//Moves to next question after wrong answer screen is shown
function wrongNext() {
	questionIndex++;
	$("#wrong-display").hide();
	$("#game-display").show();
	checkNext();
}



//checks if there are more questions
function checkNext() {
	if (questionIndex < (questions.length)) {	//make sure the array doesnt mess with askQuestion
		stopClock();
		askQuestion(questionIndex);
	}
}

//Resets clock
function stopClock() {
	clearInterval(timer);
	timeLeft = startTime;
}

//Resets game
function reset() {
	//randomOrder(questions);

	//for (i = 0; i < questions.length; i++) {
	//	randomOrder(questions[i].choices);
	//}
	correct = 0;
	wrong = 0;
	questionIndex = 0;
	startTime = 30
	timeLeft = startTime;
}


}); //Document Ready Function