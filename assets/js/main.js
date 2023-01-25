var localization;
function language() {
	let lang = sessionStorage.getItem('lang');
	//console.log(`Session value of 'lang' is ${lang}`);
	if ( lang === null) {
		//console.log(`New visitor`);
		localization = "en";
		sessionStorage.setItem('lang','en');
		//console.log(`Set localization to ${localization}`);
	} else {
		localization = lang;
		//console.log(`Returning visitor with set language ${localization}`);
	}
}
language();
const participants = [];
const turnsParticipants = [];
var whosTurnIsIt; // The value is the position of the participants list (array)
var participantName; // partitionName
var questionIndex;
var questionText;
var	startTime;
var	endTime;
var turnDuration;
var alreadyAskedBoolean = false;
var TurnParticipantText;
var gameRound = 1;
var gameFinished = false;
var maxRoundsInGame;
var howPlayAgain;
var selectedTopicId;
var gameStartTime;
var gameStopTime;
var gameDuration = "initial";