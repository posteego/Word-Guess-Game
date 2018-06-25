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

function Game(theme) {
  this.word = words; 
};

// create Dictionary object for different themes
function Dictionary(word, def) {
  this.words = word;
  this.def = def;
  this.define = function(index){
    console.log(this.word[index]);
  };
  this.wordLength = function(word){
    return word.length;
  }
}