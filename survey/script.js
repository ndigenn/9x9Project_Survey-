function nextQuestion(currentQuestionId) {
	var currentQuestion = document.getElementById(currentQuestionId);
	currentQuestion.style.display = "block";

	var nextQuestionId = getNextQuestionId(currentQuestionId);
	var nextQuestion = document.getElementById(nextQuestionId);

	//hiding next question
	nextQuestion.style.display = "block";
}

function getNextQuestionId(currentQuestionId) {
	//logic branching
	switch (currentQuestionId) {
		case "question1":
			var answer = document.querySelector('input[name="q1"]:checked').value;
			if (answer === "mailing_list"){
				return "";
			}
			else if (answer == "youth"){
				return "question2";
			}
			else if (answer == "adults"){
				return "";
			}
			else if (answer == "teach"){
				return "";
			}
			else if (answer == "find_out_more"){
				return "";
			}
			else if (answer == "links"){
				return "";
			}
			else if (answer == "other_ideas"){
				return "";
			}
			else {
				//fill in
			}

		//question 2
		case "question2":
			var answer = document.querySelector('input[name="q2"]:checked').value;
			if (answer === "") {
				return "";
			} else {
				return "";
			}
		case "question3":
			return "submitContainer";
		default:
			return null;
	}
}
