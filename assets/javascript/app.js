$(document).ready(function() {

    // track which question we are on
    var questionCounter = 0;
    // initial time of 20 seconds for each question
    var time = 2000;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    //want to make these questions appear randomly next
    var questions = [
      {
	    question: "Which Premier League club has 16 players appearing for various national teams in the 2018 World Cup?",
	    choices: ["Tottenham", "Chelsea", "Manchester City", "Arsenal"],
	    correctAnswer: "Manchester City",
	    image: "<img src='assets/images/jesus.gif'>"
	  }, 
	  {
	    question: "How many World Cup appearances will 2018 mark for Brazil? (hint: they have qualified for every tournament)",
	    choices: ["27", "21", "32", "38 "],
	    correctAnswer: "21",
	    image: "<img src='assets/images/ronaldo.jpg'>"
	  }, 
	  {
	    question: "Which team is looking to win back-to-back World Cups, a feat not done since Brazil in 1962?",
	    choices: ["Germany", "Portugal", "Spain", "Argentina"],
	    correctAnswer: "Germany",
	    image: "<img src='assets/images/germany.jpg' height='200' width='200'>"
	  }, 
	  {
	    question: "Which of these teams are making their first appearance in a World Cup?",
	    choices: ["Serbia", "Peru", "Iceland", "Tunisia"],
	    correctAnswer: "Iceland",
	    image: "<img src='assets/images/iceland.gif'>"
	  }, 
	  {
	    question: "What club jersey will Sadio Mané trade for his Senegal national team jersey during the World Cup?",
	    choices: ["Bayern Munich", "Barcelona", "A.C. Milan", "Liverpool"],
	    correctAnswer: "Liverpool",
	    image: "<img src='assets/images/mane.jpg'>"
	  },
	  {
	    question: "What is the name of the mascot of the 2018 FIFA World Cup?",
	    choices: ["Zabivaka", "Bely Mishka", "Zaika", "Putin"],
	    correctAnswer: "Zabivaka",
	    image: "<img src='assets/images/zabivaka.jpg'>"
	  },
	  {
	    question: "Which of the following major Russian cities will not be hosting a World Cup Match",
	    choices: ["Kaliningrad", "Sochi", "Moscow", "Vladivostok"],
	    correctAnswer: "Vladivostok",
	    image: "<img src='assets/images/putin.gif'>"
	  },
	  {
	    question: "How old will Essam El-Hadary, Egyptian captain and goalkeeper, be when he becomes the all-time oldest participant of the competition?",
	    choices: ["45", "36", "47", "50"],
	    correctAnswer: "45",
	    image: "<img src='assets/images/essam.jpg'>"
	  },
	  {
	    question: "Which player is Argentina's all-time leading goalscorer and five-time winner of FIFA's player of the year?",
	    choices: ["Maradona", "Lionel Messi", "Sergio Agüero", "Ángel Di María"],
	    correctAnswer: "Lionel Messi",
	    image: "<img src='assets/images/messi.gif'>"
	  },
	  {
	    question: "What nefarious, rat-lookin motherfucker will be taking the stage for his 3rd World Cup, keen on chewing his way through more opponents?",
	    choices: ["Pepe", "Sergio Ramos", "Luis Suarez", "Cristiano Ronaldo"],
	    correctAnswer: "Luis Suarez",
	    image: "<img src='assets/images/suarez.jpg'>"
	  },
	  {
	    question: "How many countries will compete in the 2018 World Cup?",
	    choices: ["16", "32", "40", "24"],
	    correctAnswer: "32",
	    image: "<img src='assets/images/draw.jpg'>"
	  },
	  {
	    question: "Which of these countries will not be playing in the 2018 World Cup?",
	    choices: ["United States of America", "Costa Rica", "Panama", "Mexico"],
	    correctAnswer: "United States of America",
	    image: "<img src='assets/images/usa.jpg'>"
	  },
	  {
	    question: "Which country does the world's most expensive player captain ? ",
	    choices: ["Uruguay", "Portugal", "France", "Brazil"],
	    correctAnswer: "Brazil",
	    image: "<img src='assets/images/neymar.jpg'>"
	  },
	  {
	    question: "What percentage of the world's population are predicted to tune into the World Cup?",
	    choices: ["33%", "61%", "46%", "58%"],
	    correctAnswer: "46%",
	    image: "<img src='assets/images/fans.jpg'>"
	  },
	  {
	    question: "Which country will Nike not outfit this year?",
	    choices: ["Poland", "South Korea", "Iran", "Nigeria"],
	    correctAnswer: "Iran",
	    image: "<img src='assets/images/trump.gif'>"
	  }];
	  

	// create question contents according to question count
	function questionContent() {
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userRight() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userWrong() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message
	function resultsScreen() {
		if (correctGuesses > incorrectGuesses) {
			var endMessage = "Golasoooo! You're ready to hoist the cup!";
		}
		else {
			var endMessage = "Crash and burn just like the Englishmen";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 20 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 20;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userRight();
		}
		else {
			clearInterval(clock);
			userWrong();
		}
	}));
});