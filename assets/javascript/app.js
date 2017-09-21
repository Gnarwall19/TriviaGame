$(document).ready( function() {

var timeLeft = 30;
var intervalId;

var correct = 0;
var wrong = 0;
var questionIndex = 0;

var timeLeft = 30;


function start() {
	$(".answer-choices").on("click", function() {
		$(this).data("clicked", true);
	});
	var timeLeft = 30;
	var intervalId = setInterval(function() {
	$("#clock").html("<h3>" + timeLeft + "</h3>");

		$(".answer-choices").on("click", function() {
			clearInterval(intervalId);
		})

		if (timeLeft === 0) {
			wrong++;
			clearInterval(intervalId);
						
			askQuestion(questionIndex);
		} else {
			timeLeft--;
		}
	}, 1000);

}

//function count() {
	//timeLeft--;
	//$("#clock").html("<h3>" + timeLeft + "</h3>");
//	var timeLeft = 30;

//	if (timeLeft === 0) {
//		wrong++;
//		clearInterval(intervalId);
//		timeLeft = 30
//	} else {
//		timeLeft--;
//	}
//}




//Questions Array
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


//Displays new question and removes current
function askQuestion(index) {

	if (questionIndex < questions.length) {
		$("#question").remove();
		$(".answer-choices").remove();
		start();
		$("#question-container").append("<div id='question'>" + questions[index].question + "</div");
		for (var i = 0; i < questions[index].choices.length; i++) {
			var newDiv = $("<div>");
			newDiv.addClass("answer-choices").attr("numberIndex", i).text(questions[index].choices[i]);
			$("#choices").append(newDiv);
		}
	}	 else {
		wrongAnswer();
	}

	$(".answer-choices").on("click", function() {
		var userChoice = $(this).attr("numberIndex");
			userChoice = parseInt(userChoice);

			if (userChoice === questions[questionIndex].answer) {
				correct++;
				questionIndex++;
			} else {
				wrong++;
				questionIndex++;
			} 

			askQuestion(questionIndex);
			console.log(correct);
			console.log(wrong);
	})

}

function wrongAnswer() {
	$("#game").hide();
	$("#wrong-display").show();
	setTimeout(askQuestion, 3000);
}

askQuestion(questionIndex);



//start();
});