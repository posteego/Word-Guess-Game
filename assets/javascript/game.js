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
  // set correct array + styles
  let word, title, color, image;
  switch(theme) {
    case 'Science':
      word = sci;
      title = "#000000"; // black
      color = "#000000"; // black
      image = 'url("assets/images/science/space.jpg")';
      break;
    case 'Music':
      word = music;
      title = "#f0ed4a"; // yellow
      color = "#f0ed4a"; // yellow
      image = '';
      break;
    case 'Movies':
      word = movies;
      title = "#ffffff"; // white
      color = "#d83832"; // red
      image = '';
      break;
    case 'Leaders':
      word = people;
      title = "#1A237E"; // black
      color = "#1A237E"; // black
      image = '';
      break;
  }

  // call setup function to restyle page
  setup(theme,title,color,image); 

  

};


// set up page for game

function setup(theme,color1,color2,image){
  // label for theme
  $("#theme").text(theme);
  // color scheme for 'Seventies' title
  if (theme === 'Movies') {
    $(".title").css('background-color',color2);
    $(".title").css('color',color1);
  } else {
    $(".title").css('background-color',color1);
  }
  // background color
  $("body").css('background-color',color2);
  // background image for science
  if (image != ''){
    $("body").css('background-image',image);
  };

  // shift title up!
  $(".mainJumbo").animate({marginTop:"5%"});
};


// clear modal, change css, run game when topic is chosen

$(".game").click(function() {
  let choice = $(this).attr('id');
  let game = new Game(choice);
  game;   // run game
});