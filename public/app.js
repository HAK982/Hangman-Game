var main = document.getElementById("main")
// var playButton = document.getElementById("play")
var section1 = document.getElementById("section-1")
var section2 = document.getElementById("section-2")
var section3 = document.getElementById("section-3")
var section4 = document.getElementById("section-4")
var section5 = document.getElementById("section-5")
var head = document.getElementById("head")

function start() {
  main.style.backgroundImage = 'url("images/bg2.jpeg")';
  section1.className += " hidden";
  section2.className += " hidden"
  section3.className += " hidden"
  section4.className -= " hidden"
  section5.className += " hidden"

}

function backToMain() {
  main.style.backgroundImage = 'url("images/hg.jpeg")';
  section1.className -= " hidden";
  section2.className += " hidden"
  section3.className += " hidden"
  section4.className += " hidden"
  section5.className += " hidden"
  head.className += " my-div"

}

function instruction() {
  main.style.backgroundImage = 'url("images/bgtilt.jpg")';
  section1.className += " hidden"
  section2.className -= " hidden"
  section5.className += " hidden"
  section3.className += " hidden"
  section4.className += " hidden"

}


var value;
function btnText(btn) {
  btn.className += " btn-click"
  btn.disabled = true
  value = btn.innerHTML.toLowerCase();
  Match(value)


}

function results(failed) {
  var ex = document.getElementById("ex")
  var res = document.getElementById("res")
  main.style.backgroundImage = 'url("images/bg2.jpeg")';
  section1.className += " hidden"
  section2.className += " hidden"
  section5.className -= " hidden"
  section3.className += " hidden"
  section4.className += " hidden"


  if (failed == true) {
    ex.innerHTML = "Oops!"
    ex.className += " red"
    res.innerHTML = " lost!<br> The correct word is: " + selectWord2
    // res.innerHTML = " won! <br> The correct word is: " + selectWord2 + "<br> Your score is: " + won + "/" + played;
  }
  else if (failed == false) {
    ex.innerHTML = "Great Job!"
    ex.className += " green"
    res.innerHTML = " won! <br> The correct word is: " + selectWord2 
  }
}

function reset() {
  main.style.backgroundImage = 'url("images/bg2.jpeg")';
  section1.className += " hidden"
  section5.className += " hidden"
  section2.className += " hidden"
  section4.className -= " hidden"
  section3.className += " hidden"
}


const names = new Map([
  ["Tom Cruise"], [""], ["Robert Downey Jr"], ["Elizabeth Olsen"], ["Johnny Depp"], ["Bilal Abbas Khan"], ["Jackie Chan"], ["Arnold Schewarzeneggar"], ["Keanu Reeves"], ["Tom Holland"], ["Chris Evans"], ["Shah Rukh Khan"], ["Akshay Kumar"], ["Sana Javed"], ["Irrfan Khan"], ["Ramsha Khan"], ["Emma Stone"], ["Emma Watson"], ["Melissa Benoist"], ["Dwayne Johnson" ], ["Scarlet Johansson"], ["Christian Bale"], ["Hugh Jackman"], ["Ryan Reynolds"], ["Dakota Johnson"], ["Katherine Langford"], ["Ahad Raza Mir"]
])

const namesWords = [...names.keys()]



const movie = new Map([
  ["Mission Impossible"], ["The Matrix"], ["American Psycho"], ["Pirates Of The Carribean"], ["The Avengers"], ["Iron Man"], ["The Mummy"], ["Who Am I"], ["Drunken Master"], ["Source Code"], ["Terminator"], ["Titanic"], ["Home Alone"], ["John Wick"], ["A Nightmare On Elm Street"], ["Night At The Museum"],["Knight And Day"],["Sleepy Hollow"],["Edge Of Tomorrow"],["Edward Scissorhands"],["The Toursit"],["Now You See Me"],["Megamind"],["King Kong"],["Inception"],["The Mask"],["The Truman Show"],["Back To The Future"],["Escape Plan"],
])

const movieWords = [...movie.keys()]

const animal = new Map([
  ["Cougar"], ["Antelope"], ["Penguin"], ["Anteater"], ["Comodo Dragon"], ["Raccoon"], ["Porcupine"], ["Hedgehog"], ["Wombat"], ["Rhinoceros"], ["Otter"], ["Chipmunk"], ["Gorilla"], ["Hyena"], ["Jaguar"], ["Ostrich"], ["Alligator"], ["Black Cobra"], ["Skunk"], ["Coyote"], ["Road Runner"], ["Megalodon"], ["Seal"], ["Grizzly Bear"]
])

const animalWords = [...animal.keys()]

const country = new Map([
  ["Liverpool", "Continent"], ["Vancouver", "Asian Country"], ["Transylvania", "Asia Country"], ["Hawaii", "North American Country"], ["Barbados", "North American Country"], ["Belgium", "European Country"], ["Amsterdam", "Country"], ["Texas", "South American Country"], ["Belarus", "African Country"], ["San Andreas", "Asian Country"], ["Chicago", "Asian Country"], ["Boston", "African Country"], ["Queens", "South American Country"], ["Denver", "Asian Country"], ["Rio", "South American Country"], ["Tokyo", "North American Country"], ["New Orleans", "European Country"], ["Cyprus", "European Country"], ["Melbourne", "North American Country"], ["Philadelphia", "European Country"], ["Sydney", "South American Country"], ["Budapest", "African and Asian Country"], ["Edinburgh", "Europe Country"], ["Venice", "African Country"]
])

const countryWords = [...country.keys()]



var choosenCat;


function getRandomWord(choosenCat) {
  return choosenCat[Math.floor(Math.random() * choosenCat.length)]
}



var lives;
var type;
var selectWord;
var selectWord2;
var letters = [];
var wordDiv = document.getElementById("wordDiv")
var remLives = document.getElementById("remLives")
var buttonsDiv = document.getElementById("buttonsDiv")
var played = 0;
var won = 0;

function init(cat) {
  played++;
  main.style.backgroundImage = 'url("images/bg2.jpeg")';
  section1.className += " hidden"
  section4.className += " hidden"
  section4.className += " hidden"
  section3.className -= " hidden"
  wordDiv.innerHTML = ''
  lives = 10;
  

  buttonsDiv.innerHTML = '<button class="alphabets" onclick="btnText(this)">A</button><button class="alphabets" onclick="btnText(this)">B</button><button class="alphabets" onclick="btnText(this)">C</button><button class="alphabets" onclick="btnText(this)">D</button><button class="alphabets" onclick="btnText(this)">E</button><button class="alphabets" onclick="btnText(this)">F</button><button class="alphabets" onclick="btnText(this)">G</button><button class="alphabets" onclick="btnText(this)">H</button><button class="alphabets" onclick="btnText(this)">I</button><button class="alphabets" onclick="btnText(this)">J</button><button class="alphabets" onclick="btnText(this)">K</button><button class="alphabets" onclick="btnText(this)">L</button><button class="alphabets" onclick="btnText(this)">M</button><button class="alphabets" onclick="btnText(this)">N</button><button class="alphabets" onclick="btnText(this)">O</button><button class="alphabets" onclick="btnText(this)">P</button><button class="alphabets" onclick="btnText(this)">Q</button><button class="alphabets" onclick="btnText(this)">R</button><button class="alphabets" onclick="btnText(this)">S</button><button class="alphabets" onclick="btnText(this)">T</button><button class="alphabets" onclick="btnText(this)">U</button><button class="alphabets" onclick="btnText(this)">V</button><button class="alphabets" onclick="btnText(this)">W</button><button class="alphabets" onclick="btnText(this)">X</button><button class="alphabets" onclick="btnText(this)">Y</button><button class="alphabets" onclick="btnText(this)">Z</button>'
  canvas()
  context.clearRect(0, 0, 400, 400);
  type = cat.innerHTML
  if (type == "Actors") {
    choosenCat = namesWords;

  }
  else if (type == "Movies") {
    choosenCat = movieWords;
    
  }
  else if (type == "Country") {
    choosenCat = countryWords;
    
  }
  else {
    choosenCat = animalWords;
    
  }

  selectWord2 = getRandomWord(choosenCat)
  selectWord = selectWord2.toLowerCase()
  var abc = 0;



  lives = 10;
  remLives.innerHTML = lives;


  for (let i = 0; i < selectWord.length; i++) {
    if (selectWord[i] != " " && selectWord[i] != "-") {
      wordDiv.innerHTML += '<p class="blank">_</p>'
    }
    else {
      wordDiv.innerHTML += "<br>"
      wordDiv.className += " wordDiv2"
    }

  }


}
var failed;
function Match(abc) {


  canvas()
  for (let i = 0; i < selectWord.length; i++) {
    if (selectWord[i] == abc) {
      letters.push(i)
    }

  }

  if (letters.length === 0) {
    lives = lives - 1;
    animate()
    remLives.innerHTML = lives

  } else {
    for (let j = 0; j < letters.length; j++) {
      if (letters[j] == 0 || wordDiv.childNodes[letters[j - 1]] == "<br>") {
        wordDiv.childNodes[letters[j]].innerHTML = abc.toUpperCase();
      }
      else {
        wordDiv.childNodes[letters[j]].innerHTML = abc;
      }

    }
    letters = []
  }
  if (lives == 0) {
    failed = true;
    results(failed)

  }
  var checking = checkWord();
  if (checking == true) {
    won++;
    results(failed)
  }


}

function checkWord() {
  var val = true;
  for (let i = 0; i < wordDiv.children.length; i++) {
    if (wordDiv.children[i].textContent == "_")
      val = false;
  }
  failed = false;
  return val;
}

var context;

// Hangman
canvas = function () {

  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 3;
};

head = function () {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.arc(80, 44, 15, 0, Math.PI * 2, true);
  context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 3;
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

frame1 = function () {
  draw(0, 150, 200, 150);
};

frame2 = function () {
  draw(10, 0, 10, 600);
};

frame3 = function () {
  draw(0, 5, 100, 5);
};

frame4 = function () {
  draw(80, 5, 80, 30);
};

torso = function () {
  draw(80, 60, 80, 100);
};

rightArm = function () {
  draw(80, 60, 120, 80);
};

leftArm = function () {
  draw(80, 60, 40, 80);
};

rightLeg = function () {
  draw(80, 100, 120, 120);
};

leftLeg = function () {
  draw(80, 100, 40, 120);
};



var animate = function () {
  if (lives == 9) {
    frame1()
  }
  if (lives == 8) {
    frame2()
  }
  if (lives == 7) {
    frame3()
  }
  if (lives == 6) {
    frame4()
  }
  if (lives == 5) {
    head()
  }
  if (lives == 4) {
    torso()
  }
  if (lives == 3) {
    leftArm()
  }
  if (lives == 2) {
    rightArm()
  }
  if (lives == 1) {
    leftLeg()
  }
  if (lives == 0) {
    rightLeg()
  }
}

function getHint() {
  if (hintArr == 0) {
    hint.innerHTML = "Hint: None!"
  }

  var hintText = hintArr.get(selectWord2)
  hint.innerHTML = "Hint: " + "</br>" + hintText
}

