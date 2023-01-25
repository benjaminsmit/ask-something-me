function openMenu() {
	document.getElementById("OpenMenu").style.display = "none";
	document.getElementById("menu").style.display = "block";
}
function closeMenu() {
	document.getElementById("OpenMenu").style.display = "block";
	document.getElementById("menu").style.display = "none";
}
function presentPartGrpExtra() {
	document.getElementById("addIcon").style.display = "none";
	document.getElementById("partGrp").style.display = "block";
}
function parseNames() {
	let participant1 = document.getElementById("saveName1").value;
	let participant2 = document.getElementById("saveName2").value;
	let participant3 = document.getElementById("saveName3").value;
	let participant4 = document.getElementById("saveName4").value;
	postParticipant(participant1);
	postParticipant(participant2);
	postParticipant(participant3);
	postParticipant(participant4);
}
function postParticipant(name) {
	if (name) {
		participants.push(name);
	}
}
function postTurn(IdParti, IdQuest, quest, startTurn, endTurn, durTurn ) {
	turnsParticipants.push({
		participantId : IdParti,
		questionId    : IdQuest,
		question      : quest,
		startTime     : startTurn,
		endTime       : endTurn,
		duration   	  : durTurn
	});
}
function presentTopics() {
	console.log("start");
	let htmlTopics = "";
	let topicCounter = 0;
	for (const topic of topicsQuestions) {
		htmlTopics += `<button class="topicCard buttonSecondary shadow" onclick="startGame(${topicCounter})">${topicsQuestions[topicCounter].title[localization]}</button>`;
		topicCounter ++;
	}
	document.getElementById("theTopics").innerHTML = htmlTopics;
}
function goToTopicStep() {
	parseNames();
	let validated = validateNeededAmountParticipants();
	if (validated == true) {
		transitionToTopics();
	} else {console.log("error: validation participants");}
}
function validateNeededAmountParticipants() {
	if (participants.length < 2) { // NEED MINIMUM OF TWO PARTICIPANTS TO PLAY
			participants.length = 0; // clear the array to start fresh, after the validation 
			presentModal("Hey", content.participantsValidationGroupSize[localization])
		} else {
			return true;
		}
}
function startGame(topicId) {
		selectedTopicId = topicId;
		determineGameLength();
		transitionToGame();
		whoStartsTheGame();
		startTurn();
}
function determineGameLength() {
	// next iteration can be to add gameplay of predefined max rounds to choose from
	maxRoundsInGame = Math.trunc((topicsQuestions[selectedTopicId].questions.length)/(participants.length));
	if (participants.length == 2) {
		maxRoundsInGame = 5;
		console.log("message: overruled maxRoundsInGame");
	}
}
function outSoon() {
	presentModal("Text test", content.participantsValidationOutSoon[localization] );
}
function presentModal(title, message) {
	document.getElementById("modalTitle").innerHTML = title;
	document.getElementById("modalMessage").innerHTML = message;
	document.getElementById("myModal").style.display = "block";
}
function hideModal() {
	document.getElementById("myModal").style.display = "none";
}
window.onclick = function(event) {
	if (event.target == document.getElementById("myModal")) { // When the user clicks anywhere outside of the modal, close it
		hideModal();
  	}
}
function transitionToBeginning() {
	document.getElementById("summary").style.display = "none";
	document.getElementById("intro").style.display = "block";
}
function transitionToTopics() {
	document.getElementById("intro").style.display = "none";
	document.getElementById("summary").style.display = "none"; // applicable when game starts again
	document.getElementById("selectTopic").style.display = "block";
	presentTopics();
}
function transitionToGame() {
	document.getElementById("selectTopic").style.display = "none";
	document.getElementById("game").style.display = "block";
	document.getElementById("totalRounds").innerHTML = maxRoundsInGame;
}
function transitionToSummary() {
	// hide game screen
	document.getElementById("game").style.display = "none";
	// prep summary screen
	let manipulation01 = content.summaryScreenDescription[localization].replace("{duration}", gameDuration);
	document.getElementById("summaryTtl").innerHTML = content.summaryScreenTitle[localization];
	document.getElementById("summaryDescr").innerHTML = manipulation01;
	// go to summary screen
	document.getElementById("summary").style.display = "block";
}
function whoStartsTheGame() {
	// give turn to first participant at the start of the game
	whosTurnIsIt = 0;
	participantName = participants[whosTurnIsIt];
}
function nextTurn() {
	if (gameFinished == false) {
		endTurn();
		whoIsNext();
		abilityToStopGame();
		startTurn();
	} else {
		endGame();
	}
}
function abilityToStopGame() {
	if (turnsParticipants.length == 3) {
		document.getElementById("stopInBetween").innerHTML = content.gameButtonStop[localization];
		document.getElementById("stopInBetween").style.display = "block";
	}
}
function endTurn() {
	endTime = new Date();
	turnDuration = timeDifference(endTime,startTime);
	postTurn(whosTurnIsIt, questionIndex, questionText, startTime, endTime, turnDuration); // save the details of the current turn 
	unsetTurnMetrics(); // clear the data of the current turn for the next participant
}
function gameTimeCalculation() {
	gameStartTime = turnsParticipants[0].startTime;// get start time game
	console.log(`The game started ${gameStartTime}`);
	gameStopTime = turnsParticipants[turnsParticipants.length - 1].endTime;// get stop time game
	console.log(`The game ended ${gameStopTime}`);
	gameDuration = timeDifference(gameStopTime, gameStartTime);
	console.log(`The game lasted ${gameDuration}`);
}
function whoIsNext() {
	if (gameRound < maxRoundsInGame) {
		playRound();
	} else {
		lastRound();
	}
}
function selectNextParticipant() {
	whosTurnIsIt ++;
	participantName = participants[whosTurnIsIt];
}
function playRound() {
		if (whosTurnIsIt < (participants.length-1)) {
			selectNextParticipant();
		} else {
			startNewRound();
		}
}
function lastRound() {
	if (whosTurnIsIt < (participants.length-2)) {
		whosTurnIsIt ++;
		participantName = participants[whosTurnIsIt];
	} else {
		if (whosTurnIsIt == (participants.length-2)){  /*AND WHEN THERE ARE 3 OR 4 PARTICIPANTS, DES THIS STILL WORK THEN?*/
			selectNextParticipant();
			document.getElementById("stopInBetween").style.display = "none";
			document.getElementById("next").innerHTML = content.gameButtonFinish[localization];
			gameFinished = true;
		}
	}
}
function getBestEngagement() {
	let copyTurns = [...turnsParticipants];
	let htmlTopQuestions = "";
	copyTurns.sort((a, b) => b.duration.localeCompare(a.duration));
	for (let questionCounter = 0; questionCounter < 3 ; questionCounter++) {
		htmlTopQuestions += `<div class="topQuestionCard" id="topQuestion"><div class="containerPrize"><svg  class="prize" viewBox="0 0 300 300">${prizeIcon[questionCounter]}</svg></div><div class="colorText" id="questionText">${copyTurns[questionCounter].question}</div><div class="grid"><div class="colorText" id="participantName">${participants[copyTurns[questionCounter].participantId]}</div><div class="colorText" id="durationTime">${copyTurns[questionCounter].duration}</div></div></div>`;
	}
	document.getElementById("questionsEngaged").innerHTML = htmlTopQuestions;
}
function presentEngagedQuestions() {
	getBestEngagement();
	presentModal("Highlights", "Who engaged best with his or her question?" );
}
function hadEnoughQuestions() {
	// quite the game before max round has reached
	gameTimeCalculation();
	unsetTurnMetrics();
	transitionToSummary();
}
function endGame() {
	endTurn();
	gameTimeCalculation();
	transitionToSummary();
}
function startTurn() {
	console.log("START TURN");
	startTime = new Date();
	pickQuestion ();
	askQuestion();
}
function startNewRound() {
	whosTurnIsIt = 0;
	participantName = participants[whosTurnIsIt];
	gameRound ++;
	document.getElementById("currentRound").innerHTML = gameRound;
}
function pickQuestion() {
	// check what the next question is for the new turn
	questionIndex = getRndInteger(0, topicsQuestions[selectedTopicId].questions.length);
	console.log("Picked RANDOM question (number) " + questionIndex + " from the pile, for participant " + participantName + " ( " + whosTurnIsIt + " )"); // for testing
	turnsParticipants.forEach(checkQuestionIdAlreadyAsked);
	if (alreadyAskedBoolean == false) {
		questionText = topicsQuestions[selectedTopicId].questions[questionIndex][localization];
		console.log("This question was not yet asked: ( " + questionText + " ) "); // for testing
	} 																
}
function checkQuestionIdAlreadyAsked(object) {
	if (object.participantId == whosTurnIsIt && object.questionId == questionIndex) {
		console.log("Proposed random question is alerady asked to this participant, propose another one");
		pickQuestion();
		alreadyAskedBoolean = true;
	}
}
function askQuestion() {
	let i = getRndInteger(0, openingTitle.length);
	TurnParticipantText = openingTitle[i] + " " +  participantName + ",";
	document.getElementById("questionAsked").innerHTML = questionText;
	document.getElementById("TurnParticipant").innerHTML = TurnParticipantText;
}
function unsetTurnMetrics() {
	questionIndex = undefined;
	questionText = undefined; 
	startTime = undefined;
	endTime = undefined;
	turnDuration = undefined;
	alreadyAskedBoolean = false;
}
function unsetGameMetrics() {
	if (howPlayAgain == "FromScratch") {
		participants.length = 0; // clear the arrays to start fresh
	}
	turnsParticipants.length = 0;
	gameRound = 1;
	gameFinished = false;
}
function startOver(state) {
	howPlayAgain = state;
	//console.log(`because of the button clicked the variable is set as ${howPlayAgain}`); modal
	unsetTurnMetrics();
	unsetGameMetrics();
	if (howPlayAgain == "FromScratch") {
		transitionToBeginning();
	} else {
		transitionToTopics();
	}
	document.getElementById("currentRound").innerHTML = gameRound;
	document.getElementById("next").innerHTML = content.gameButtonContinue[localization];
}
// return a random number within a given range
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function timeDifference(date1, date2) {
	var difference = date1.getTime() - date2.getTime();
	var daysDifference = Math.floor(difference/1000/60/60/24);
	difference -= daysDifference*1000*60*60*24
	var hoursDifference = Math.floor(difference/1000/60/60);
	difference -= hoursDifference*1000*60*60
	var minutesDifference = Math.floor(difference/1000/60);
	difference -= minutesDifference*1000*60
	var secondsDifference = Math.floor(difference/1000);
	var timedur = numberToTimeFormat(hoursDifference)+":"+numberToTimeFormat(minutesDifference)+":"+numberToTimeFormat(secondsDifference)
	return timedur;
}
function numberToTimeFormat (number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}
function multiSort(array, sortObject = {}) {
	const sortKeys = Object.keys(sortObject);
	// Return array if no sort object is supplied.
	if (!sortKeys.length) {
		return array;
	}
	// Change the values of the sortObject keys to -1, 0, or 1.
	for (let key in sortObject) {
		sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1 : (sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
	}
	const keySort = (a, b, direction) => {
		direction = direction !== null ? direction : 1;
		if (a === b) { // If the values are the same, do not switch positions.
			return 0;
		}
		// If b > a, multiply by -1 to get the reverse direction.
		return a > b ? direction : -1 * direction;
	};
	return array.sort((a, b) => {
		let sorted = 0;
		let index = 0;
		// Loop until sorted (-1 or 1) or until the sort keys have been processed.
		while (sorted === 0 && index < sortKeys.length) {
			const key = sortKeys[index];
			if (key) {
				const direction = sortObject[key];
				sorted = keySort(a[key], b[key], direction);
				index++;
			}
		}
		return sorted;
	});
}