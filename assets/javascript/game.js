/**************  WORD GUESS GAME LOGIC  **************/

/* Plan : give the user choice between different themes, */
/*        CSS changes based on theme choice,             */
/*        questions are asked based on choice            */

fetch("../themes/astro_words.txt")
  .then( r => r.text() )
  .then( t => console.log(t))

// variable declarations

var words = ['test','new'],   // list of words
  def = ['apple', 'works'],   // definitions
  wins = 0,                   // win counter
  remaining = 10,             // # guesses
  guesses = [];               // letters guessed
  

// create Dictionary object for different themes
function Dictionary(word, def) {
  this.word = word;
  this.def = def;
}

var astronomy = new Dictionary(words,def); // 'astronomy' list

console.log(astronomy.word[1] + ' ' + astronomy.def[1]); // it works