/**************  WORD GUESS GAME LOGIC  **************/

/* Plan : give the user choice between different themes, */
/*        CSS changes based on theme choice,             */
/*        questions are asked based on choice            */

// create Dictionary object for different themes
function Dictionary(word, def) {
  this.word = word;
  this.def = def;
};

var words = ['mic','new','another'],   // list of words
  def = ['check','entry','one'];      // definitions

var astronomy = new Dictionary(words,def); // 'astronomy' list

console.log(astronomy.word[1] + ' ' + astronomy.def[1]); // it works