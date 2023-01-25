/*
const cms = [ // the data model can improve I think
	{
		sectionIntro : { //0
			title : { en : "", nl : ""},
			descriptionIntro : { en : "The perfect game for couples who want to get a level deeper in understanding each others thoughts and desires.", nl : ""}
		}
	},
	{
		sectionTopics : { //1
			title : { en : "", nl : ""},
			outSoon : { en : "Working on new questions, will be out soon!", nl : "Nieuwe vragen zijn onderweg!"}
		}
	},
	{
		sectionGame : { //2
			salutationD : [ // game.js:141 function 
				{ en : "Amazing"		, nl : "Wonderbaarlijke" 	},
				{ en : "Extraordinary"	, nl : "Buitegewone" 		},
				{ en : "Unbelievable"	, nl : "Ongelovelijke" 		}
			],
			buttonFinish : { en : "Finish Game", nl : "Stop het spel"}
		}
	},
	{
		sectionSummary : { //3
			title : { en : "", nl : ""}
		}
	},
];
*/
const content = {
	gameSalutation : [ 
		{ en : "Amazing"		, nl : "Wonderbaarlijke" 	},
		{ en : "Extraordinary"	, nl : "Buitegewone" 		},
		{ en : "Unbelievable"	, nl : "Ongelovelijke" 		}
	],
	gameButtonContinue : {
		en : "Next question", nl : "volgende vraag"
	},
	gameButtonStop : {
		en : "Stop game", nl : "Stop spel"
	},
	gameButtonFinish : {
		en : "Finish game", nl : "Spel afmaken"
	},
	participantsValidationOutSoon : {
		en : "Working on new questions, will be out soon!", nl : "Nieuwe vragen zijn onderweg!"
	},
	participantsValidationGroupSize : {
		en : "You need at least two participants to play the game.", nl : "Het beste is om met minimaal 2 personen dit te spelen."
	},
	summaryScreenTitle : {
		en : "Wow, congratulations!", nl : "Wauw, gefeliciteerd!"
	},
	summaryScreenDescription : {
		en : "You just spend {duration} on hopefully a fun and beautiful conversation. Thank you for playing this game and we really hope you liked it!", nl : "   {0}  "
	},
	key2 : {
		en : "This is the copy for key2",
		nl : "Dit is de content voor key2"
	}
};
const content2 = {
	screenComponentKey : {											
		en : `This is the ${content.gameSalutation[0][localization]} copy for key`, nl : `Dit is de content voor key`, test : "Hello World!"
	}
};
const prizeIcon = [
	`<g><path d="M148.5,190.718c9.881,0,17.918-8.038,17.918-17.919c0-9.88-8.037-17.918-17.918-17.918
		c-9.881,0-17.918,8.038-17.918,17.918C130.582,182.68,138.619,190.718,148.5,190.718z"/>
	<path d="M297,107.999c0-9.881-8.038-17.918-17.918-17.918c-9.881,0-17.919,8.037-17.919,17.918c0,3.205,0.856,6.209,2.337,8.815
		l-16.17,16.17c-4.822-11.349-7.186-28.849-7.824-42.229c5.039-3.175,8.403-8.773,8.403-15.156c0-9.88-8.038-17.918-17.918-17.918
		c-9.881,0-17.919,8.038-17.919,17.918c0,4.453,1.643,8.522,4.34,11.66c-10.464,18.023-25.075,35.371-34.143,45.427
		c-7.97-16.629-16.955-49.719-22.527-75.554c4.067-3.287,6.676-8.309,6.676-13.933c0-9.881-8.037-17.918-17.918-17.918
		c-9.881,0-17.918,8.037-17.918,17.918c0,5.624,2.609,10.646,6.676,13.933c-5.569,25.837-14.554,58.932-22.528,75.56
		c-9.063-10.047-23.667-27.381-34.143-45.433c2.698-3.138,4.34-7.207,4.34-11.66c0-9.88-8.037-17.918-17.918-17.918
		c-9.88,0-17.918,8.038-17.918,17.918c0,6.387,3.367,11.985,8.409,15.159c-0.629,13.379-2.99,30.878-7.824,42.232L33.5,116.815
		c1.48-2.606,2.336-5.61,2.336-8.815c0-9.881-8.037-17.918-17.918-17.918C8.038,90.081,0,98.119,0,107.999
		c0,7.24,4.324,13.475,10.519,16.3c6.352,32.257,14.764,78.529,14.764,89V261.9c0,5.422,4.396,9.818,9.817,9.818h226.8
		c5.423,0,9.818-4.396,9.818-9.818v-48.601c0-10.469,8.41-56.742,14.766-89C292.676,121.474,297,115.24,297,107.999z
		 M44.357,155.443c3.835,3.833,10.05,3.833,13.886,0c9.319-9.321,14.089-26.038,16.529-41.044
		c15.884,22.439,33.386,40.044,34.385,41.044c3.835,3.833,10.05,3.833,13.886,0c9.89-9.891,18.954-36.98,25.457-61.117
		c6.503,24.137,15.567,51.227,25.457,61.117c1.842,1.84,4.339,2.875,6.943,2.875c2.604,0,5.101-1.035,6.942-2.875
		c0.999-1,18.501-18.605,34.385-41.044c2.441,15.006,7.21,31.723,16.529,41.044c3.836,3.833,10.051,3.833,13.886,0l9.743-9.744
		c-3.645,19.507-7.85,43.309-9.541,57.783H44.155c-1.691-14.475-5.896-38.276-9.54-57.783L44.357,155.443z M252.082,252.081H44.918
		v-28.964h207.164V252.081z"/></g>`,
	`<path d="M262.655,11.202h-39.041V9.884c0-5.458-4.425-9.884-9.883-9.884H83.269c-5.458,0-9.884,4.426-9.884,9.884v1.318h-39.04
	c-5.458,0-9.883,4.425-9.883,9.884v54.029c0,37.247,20.16,58.044,56.813,58.772c3.445,8.52,7.957,16.27,13.484,22.951
	c7.759,9.378,17.148,16.395,27.55,20.764v50.708h-39.04c-5.458,0-9.884,4.425-9.884,9.884v48.923c0,5.458,4.426,9.884,9.884,9.884
	h130.463c5.458,0,9.883-4.426,9.883-9.884v-48.923c0-5.459-4.425-9.884-9.883-9.884h-39.04v-50.708
	c10.401-4.369,19.791-11.386,27.55-20.764c5.527-6.681,10.039-14.432,13.484-22.951c36.652-0.728,56.812-21.524,56.812-58.772
	V21.086C272.538,15.627,268.113,11.202,262.655,11.202z M44.229,75.115V30.969h29.156v60.454c0,7.696,0.703,15.179,2.045,22.34
	C53.932,111.517,44.229,99.341,44.229,75.115z M203.848,248.076v29.156H93.152v-29.156H203.848z M154.925,228.31h-12.85v-45.787
	c2.123,0.199,4.262,0.323,6.425,0.323s4.302-0.124,6.425-0.323V228.31z M148.5,163.078c-32.07,0-55.348-30.135-55.348-71.655V19.768
	h110.695v71.655C203.848,132.943,180.57,163.078,148.5,163.078z M252.771,75.115c0,24.226-9.703,36.401-31.201,38.648
	c1.342-7.161,2.044-14.644,2.044-22.34V30.969h29.157V75.115z"/>`,
	`<path d="M239.858,187.702c-1.151-3.543-4.19-6.144-7.869-6.735l-51.065-8.193l-15.796-30.836h0.812c5.483,0,9.93-4.447,9.93-9.929
	c0-5.484-4.446-9.93-9.93-9.93h-8.572l46.592-15.531c4.056-1.352,6.79-5.146,6.79-9.419V9.93c0-5.484-4.446-9.93-9.93-9.93H96.181
	c-5.483,0-9.93,4.445-9.93,9.93v87.199c0,4.273,2.734,8.067,6.79,9.419l46.592,15.531h-8.572c-5.483,0-9.93,4.445-9.93,9.93
	c0,5.481,4.446,9.929,9.93,9.929h0.814l-15.797,30.836l-51.065,8.193c-3.679,0.592-6.718,3.192-7.869,6.735
	c-1.151,3.543-0.223,7.434,2.406,10.075l36.492,36.659l-7.968,51.104c-0.574,3.68,0.961,7.373,3.976,9.563
	c1.729,1.256,3.776,1.897,5.836,1.897c1.532,0,3.07-0.355,4.487-1.072l46.129-23.379l46.129,23.379
	c3.322,1.685,7.308,1.367,10.323-0.824c3.015-2.189,4.55-5.883,3.976-9.563l-7.97-51.104l36.492-36.659
	C240.08,195.136,241.009,191.245,239.858,187.702z M106.11,19.858h84.781v70.112L148.5,104.103L106.11,89.971V19.858z
	 M183.337,223.992c-2.23,2.239-3.261,5.41-2.774,8.534l5.759,36.928l-33.332-16.893c-2.821-1.43-6.155-1.43-8.977,0l-33.333,16.893
	l5.758-36.93c0.486-3.124-0.543-6.293-2.774-8.532l-26.366-26.488l36.896-5.921c3.123-0.501,5.82-2.461,7.264-5.277l17.043-33.27
	l17.042,33.27c1.443,2.816,4.141,4.776,7.264,5.277l36.897,5.921L183.337,223.992z"/>`
];

const questions = [ // the position in the array is the questionId
	"What do you most enjoy about the beginning of relationships?",
	"What do you dread about the beginning of relationships?",
	"What questions would you like to ask me but are too afraid to ask?",
	"How do you feel about monogamy?",
	"How do you feel about polyamory?",
	"What is your idea of a perfect romantic evening?",
	"What is an aspect of sexuality that feels mysterious to you?",
	"Where is the strangest place you’ve had sex?",
	"What non-sexual thing feels sexual to you?",
	"Do you have any big deal breakers?",
	"What are some “green flags” for you in relationships?"
];
const openingTitle = [
	"Amazing",
	"Extraordinary",
	"Unbelievable",
	"Astonishing",
	"Fabulous",
	"Overwhelming",
	"Staggering",
	"Astounding",
	"Fantastic",
	"Phenomenal",
	"Awesome",
	"Remarkable",
	"Wonderful",
	"Unimaginable",
	"Breathtaking",
	"Incredible",
	"Spectacular",
	"Beautiful",
	"Blooming",
	"Glorious",
	"Lovely",
	"Pleasing",
	"Aesthetic",
	"Good-looking",
	"Magnificent",
	"Pretty",
	"Sparkling",
	"Appealing",
	"Elegant",
	"Gorgeous",
	"Marvelous",
	"Splendid",
	"Attractive",
	"Cute",
	"Exquisite",
	"Graceful",
	"Ravishing",
	"Awesome",
	"Dazzling",
	"Fine",
	"Handsome",
	"Picturesque",
	"Scenic",
	"Stunning"
];