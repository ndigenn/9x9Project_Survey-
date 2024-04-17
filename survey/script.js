var questions = {
	"question1": true,
	"question2": false,
	"question3": false,
	"question4": false,
	"question5": false,
	"question6": false,
	"question7": true
};

const numberOfQuestions = 7

function nextQuestion(currentQuestionId, qNum) {
	var currentQuestion = document.getElementById(currentQuestionId);
	currentQuestion.style.display = "none";

	if (qNum == 1){
		getNextQuestions();
	}	

	var nextQuestionId = "";
	do {
		qNum++;
		nextQuestionId = "question" + (qNum);
		console.log("Next ID", nextQuestionId);
	} while (!questions[nextQuestionId] && qNum < numberOfQuestions);

	if (qNum >= numberOfQuestions){
		nextQuestionId = "question" += numberOfQuestions;
	}
	document.getElementById(nextQuestionId).style.display = "block";
}

function getNextQuestions() {
	let youth = document.getElementById("q1-youth");
	let adult = document.getElementById("q1-adult");
	let teach = document.getElementById("q1-teach");
	let links = document.getElementById("q1-links");
	let ideas = document.getElementById("q1-ideas");

	if (youth.checked){
		questions["question2"] = true;
	}
	if (adult.checked){
		questions["question3"] = true;
	}
	if (teach.checked){
		questions["question4"] = true;
	}
	if (links.checked){
		questions["question5"] = true;
	}
	if (ideas.checked){
		questions["question6"] = true;
	}

	console.log("Question states", questions);
}

function surveyFormListener(form) {
	form.addEventListener('submit', event => {
		event.preventDefault();

		var formData = new FormData(form);
		console.log(formData);

		fetch('php/survey.php', { method: 'POST', body: formData })
			.then(response => response.text())
			.then(data => {
				console.log(data);
			});
	});
}