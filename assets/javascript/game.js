/**************  WORD GUESS GAME LOGIC  **************/

/* Plan : give the user choice between different themes, */
/*        CSS changes based on theme choice,             */
/*        questions are asked based on choice            */

// variable declarations

var words = ['test','new'],   // list of words
  def = ['apple', 'works'],   // definitions
  wins = 0,                   // win counter
  remaining = 10,             // # guesses
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
  this.word = words; 
};