/**************  WORD GUESS GAME LOGIC  **************/

/* Plan : give the user choice between different themes, */
/*        CSS changes based on theme choice,             */
/*        questions are asked based on choice            */

// variable declarations

var sci = ['space shuttle','lucy','pocket calculator','magnavox odyssey','sony walkman',
            'floppy disks','email','electronic paper','fiber optics','car phone'],
  music = ['led zeppelin', 'pink floyd', 'rolling stones', 'queen', 'black sabbath', 
            'the who', 'david bowie', 'fleetwood mac', 'bee gees', 'bob dylan'],
  movies = ['star wars','jaws', 'patton', 'the french connection', 'the godfather',
            'the sting', 'one flew over the cuckoos nest', 'rocky','superman','grease'],
  people = ['richard nixon','jimmy carter', 'mao zedong', 'deng xiaoping',
            'fidel castro', 'margaret thatcher', 'pope paul vi', 'chiang kai-shek',
            'golda meir', 'pierre trudeau'],
  wins = 0,                   // win counter
  remaining = 15,             // # guesses
  guesses = [];               // letters guessed


// hide/show #playButton

$("#playButton").click(function(){
  $("#playButton").hide();
});

$(".closeBtn").click(function(){
  $("#playButton").show();
});


// game

function Game(theme) {
  // get the correct word array
  let word;
  switch(theme) {
    case 'Science':
      word = sci;
      break;
    case 'Music':
      word = music;
      break;
    case 'Movies':
      word = movies;
      break;
    case 'Leaders':
      word = people;
      break;
  }
  // call setup function to restyle page
  setup(theme); 

};

function setup(theme){

};

// clear modal, change css, run game when topic is chosen

$(".game").click(function() {
  let choice = $(this).attr('id');
  let game = new Game(choice);
  game;   // run game
});