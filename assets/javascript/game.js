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
  newword,
  prevword = '',
  newone,
  index,
  wins = 0,                   // win counter
  win = false,                // win boolean
  remaining = 15,             // # guesses
  guesses = [];               // letters guessed

var game;

// hide game
$(".gameDisplay").hide();

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

  newword = newWord(word);
  newone = newword;

  // display word
  printWord(newword, prevword);

  // remove spaces from word
  newword = newword.replace(/\s+/g, '');
  let len = newword.length;

  $(document).on('keyup', function(e) {
    if (remaining === 0) {
      printImage(word,index);
    }
    if (e.which >= 65 && e.which <= 90 && remaining > 0) {
      let guess = String.fromCharCode(e.which);
      guess = guess.toLowerCase();
      let fit = newword.indexOf(guess);   // first instance

      if ($.inArray(guess, guesses) == -1) {
        guesses.push(guess);
        $(".guessed").append(guess + "&nbsp;");

        if (fit == -1 ) {                     // letter is not in word
          remaining--;
          $(".guesses").html(remaining);
        } else {                              // letter is in word
          let reg = new RegExp(guess,"g");    // turn guess into regular expression
          let num = newword.match(reg).length; // get number of letters to repeat
          fillin(guess, newword, fit, num);
        }
      };
    };
    win = checkWord(newword);
    if (win === true){
      printImage(word,index);
      wins++;
      prevword = newone;
      $(".wins").html(wins);
      game = new Game(theme);
      // reset vars
      win = false;
      remaining = 15;
      guesses = [];
      game;
    };
  });
  
};


function printImage(word, i) {
  var newImage = document.createElement("img");
  switch(word) {
    case sci:
      newImage.setAttribute("src",i);
      break;
    case music:
      newImage.setAttribute("src",i);
      break;
    case movies:
      newImage.setAttribute("src",i);
      break;
    case people:
      newImage.setAttribute("src",i);
      break;
  }
}


function checkWord(word) {
  let winner;
  for (i in word) {
    let spot = $("."+i);
    if (spot.html() != '_') {
      winner = true;
    } else {
      return false;
    }
  }
  return winner;
}


function newWord(word){
  index = Math.floor(Math.random() * word.length); // pick an index in the word array
  let newword = word[index];
  return newword;
}


function printWord(word, prev){
  let newSpace;
  let i=0;

  // clear previous word
  let myNode = document.getElementById("word");
  if (prev != ''){
    for (let j=0; j<prev.length;j++){
      console.log(prev[j]);
      myNode.deleteCell(0);
    }
    $(".guessed").empty();
  }

  // print new word
  for (let char=0; char<word.length; char++){
    newSpace = document.createElement("td");
    if (word[char] != ' ') {
      newSpace.setAttribute("class",i)
      newSpace.innerHTML = "_";
      $("#word").append(newSpace);
      i++;
    } else {
      newSpace.innerHTML = " ";
      $("#word").append(newSpace);
    }
  }

};


function fillin(guess, word, index, num) {
  // only one instance
  let spot = "." + index;
  $(spot).text(word[index]);
  // if more than one instance
  if ( num > 1 ){
    let indices = [];
    for(let i=index+1; i<word.length;i++) {
      if (word[i] === guess) indices.push(i);
    }
    for (j in indices) {
      spot = "." + indices[j];
      $(spot).text(word[indices[j]]);
    }
  };
};


// set up page for game

function setup(theme,color1,color2,image){
  // label for theme
  $("#theme").text(theme);

  // text color for leaders
  if (theme === 'Leaders') {
    $("body").css('color', 'white');
  }

  // color scheme for 'Seventies' title
  if (theme === 'Movies') {
    $(".title").css('background-color',color2);
    $(".title").css('color',color1);
    $("body").css('color',color2);
    $(".gameDisplay").css('background-color', color1);
  } else {
    $(".title").css('background-color',color1);
  }

  // background color
  $("body").css('background-color',color2);
  // background image for science
  if (image != ''){
    $("body").css('background-image',image);
    $(".gameDisplay").css("background-color", "black");
    $("body").css('color','white');
  };

  // shift title up!
  $(".mainJumbo").animate({marginTop:"5%"});

  // display variables
  $(".wins").text(wins);
  $(".guesses").text(remaining);

  // show the actual game!
  $(".gameDisplay").show();
};


// clear modal, change css, run game when topic is chosen

$(".game").click(function() {
  let choice = $(this).attr('id');
  game = new Game(choice);
  game;   // run game
});