$(document).ready( function() {


var questions = [
question1 =
{
	question: "How many Sages are there in Ocarina of Time?",
	choices: ["7", "5", "10", "3"],
	answer: 0
},
question2 =
{
	question: "By what name does Link's trusty boat and loquacious companion go by in Wind Waker?",
	choices: ["King of Red Dragons", "King of Blue Lions", "King of Red Lions", "King of Blue Dragons"],
	answer: 2
},
question3 =
{
	question: "Which game in the series was predominately a side scrolling adventure?",
	choices: ["The Legend of Zelda", "Links Awakening", "Four Swords", "The Adventure of Link"],
	answer: 3
},
question4 =
{
	question: "What is the name of the spirit residing within Link's sword in The Legend of Zelda: Skyward Sword?",
	choices: ["Pi", "Fi", "Zi", "Ti"],
	answer: 1
},
question5 =
{
	question: "What are the magic words that Tingle created himself?",
	choices: ["Shoosho-Tinkah!", "Tingla-Minglah!", "Kooloo-Limpah!", "Lompah-Fumpah!"],
	answer: 2
},
];

var correct = 0;
var wrong = 0;
var startAt = 10;
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
	oOT();
}

//$("#reset").hide();


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

//Initializes game with the first questions after START button is pressed
function game() {
	$("#question-container").html(questions[currentQuestion].question);
	$("#a").html(questions[currentQuestion].choices[0]);
	$("#b").html(questions[currentQuestion].choices[1]);
	$("#c").html(questions[currentQuestion].choices[2]);
	$("#d").html(questions[currentQuestion].choices[3]);
}


//Displays new questions after inBetween timer is finished
function nextQuestion() {
	$("#correct-display").hide();
	$("#wrong-display").hide();
	$("oOT-display").hide();
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
	$("#question-container").hide();
	$("#choices").hide();
	$("#correct-display").show();
	correct++;
	console.log(correct);
	number = startAt;
	run2();
}

function wrongPage() {
	$("#question-container").hide();
	$("#choices").hide();
	$("#wrong-display").show();
	wrong++;
	console.log(wrong);
	number = startAt;
	run2();
}

function oOT() {
	$("#question-container").hide();
	$("#choices").hide();
	$("#oOT-display").show();
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
	$("#correct-results").html(correct);
	$("#wrong-results").html(wrong);
}

$("#play-again").on("click", function() {
	correct = 0;
	wrong = 0;
	currentQuestion = 0;
	$("#game-over").hide();
	$("#game-display").show();
	startGame();
});


}); //document ready