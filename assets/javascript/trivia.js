$(document).ready( function() {


var questions = [
question1 =
{
	question: "The answer is a",
	choices: ["a", "b", "c", "d"],
	answer: 0
},
question2 =
{
	question: "The answer is b",
	choices: ["a", "b", "c", "d"],
	answer: 1
},
question3 =
{
	question: "The answer is c",
	choices: ["a", "b", "c", "d"],
	answer: 2
},
question4 =
{
	question: "The answer is d",
	choices: ["a", "b", "c", "d"],
	answer: 3
},
question5 =
{
	question: "The answer is a",
	choices: ["a", "b", "c", "d"],
	answer: 0
},
];

var correct = 0;
var wrong = 0;
var startAt = 10;			//chang this name
var number = startAt;
var userAnswer;
var currentQuestion = 0;
var inBetween = 3;
var number2 = inBetween;

function time() {
	$("#clock").html(number);
}

function run() {
	counter = setInterval(countDown, 1000);
}

function countDown() {
	number--;
	time();
	if (number === 0) {
		stop();
	}
}

function stop() {
	clearInterval(counter);
	clearTimeout(counter);
	number = startAt;
	wrongPage();				//unAnswered();					//Hopefully you can call wrong answer instead...
}

//$("#reset").hide();
	//song?

$("#start").on("click", function() {
	startGame();
});

function startGame() {
	$("#start").hide();
	$("#intro").hide();
	time();
	run();
	game();
}

function game() {		//THERE WILL BE ISSUES
	$("#question-container").html(questions[currentQuestion].question);
	$("#a").html(questions[currentQuestion].choices[0]);
	$("#b").html(questions[currentQuestion].choices[1]);
	$("#c").html(questions[currentQuestion].choices[2]);
	$("#d").html(questions[currentQuestion].choices[3]);
}



function nextQuestion() {
	$("#correct-display").hide();
	$("#wrong-display").hide();
	$("#question-container").show();
	$("#choices").show();
	currentQuestion++;
	if (currentQuestion == questions.length) {
		results();
	} else {
		time();
		run();
		$("#question-container").html(questions[currentQuestion].question);
		$("#a").html(questions[currentQuestion].choices[0]);
		$("#b").html(questions[currentQuestion].choices[1]);
		$("#c").html(questions[currentQuestion].choices[2]);
		$("#d").html(questions[currentQuestion].choices[3]);
	}
}




//onClick events for answer choices

$("#a").on("click", function() {
	userAnswer = 0;
	answerCompare();
});

$("#b").on("click", function() {
	userAnswer = 1;
	answerCompare();
});

$("#c").on("click", function() {
	userAnswer = 2;
	answerCompare();
});

$("#d").on("click", function() {
	userAnswer = 3;
	answerCompare();
});


function answerCompare() {
	clearInterval(counter);
	if (userAnswer == questions[currentQuestion].answer) {
		correctPage();
	}	else {
		wrongPage();
	}
}

function correctPage() {
	$("#question-container").hide(); 		//.empty()?
	$("#choices").hide();								//just hide #game-display
	$("#correct-display").show();
	correct++;
	console.log(correct);
	number = startAt;
	run2();
}

function wrongPage() {
	$("#question-container").hide(); 		//.empty()?
	$("#choices").hide();								//just hide #game-display
	$("#wrong-display").show();
	wrong++;
	console.log(wrong);
	number = startAt;
	run2();
}

function between() {
	$("#clock").html(number2);
}

function run2() {
	counter2 = setInterval(countDown2, 1000)
}

function countDown2() {
	number2--
	between();
	if (number2 === 0) {
		stop2();
	}
}

function stop2() {
	clearInterval(counter2);
	clearTimeout(counter2);
	number2 = inBetween;
	nextQuestion();
}


function results() {
	clearTimeout(counter);
	clearTimeout(counter2);
	$("#game-display").hide();
	$("#game-over").show();
}










});