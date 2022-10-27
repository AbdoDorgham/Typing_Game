window.addEventListener('load', init);

const seconds = document.getElementById('seconds');
const select = document.getElementById('select');
const currentWord = document.getElementById('current-word');
const timeDisplay = document.getElementById('time');
const wordInput = document.getElementById('word-input');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');




// Available Levels 
const levels = {
  easy: 15,
  medium: 13,
  hard: 10
};

// To Get Level 
function getLevel() {
  var value = Number(select.options[select.selectedIndex].value);
  let currentlevel;
  if (value == 1 || value == 0) {
    currentlevel = levels.easy;
  }
  else if (value == 2) {
    currentlevel = levels.medium;
  }
  else {
    currentlevel = levels.hard;
  }
  return currentlevel;
}

seconds.innerHTML = getLevel();
timeDisplay.innerHTML = getLevel();
let time = getLevel();
var score = 0;
localStorage.setItem("score", score);
scoreDisplay.innerHTML = 0;

// To Change Level
function changelevel() {
  seconds.innerHTML = getLevel();
  time = getLevel() + 1;
  score = 0
  localStorage.setItem("score", score);
  scoreDisplay.innerHTML = 0;
  wordInput.focus();


}
select.onchange = changelevel;

// Array Of Words 
const words = [

  'excellent',
  'perfect',
  'fine',
  'wonderful',
  'nice',
  'lovely',
  'beautiful',
  'sweet',
  'sugary',
  'masterful',
  'clever',
  'amazing',
  'soft',
  'good',
  'pretty',
  'well',
  'cute',
  'awesome',
  'very good',
  'magical',
  'kind',
  'funny',
  'extraordinary',
  'enjoyable',
  'special'


];

// Get Word from Array 
function showWord() {

  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];

}

function init() {
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);

}

//  Match currentWord VS wordInput 
function startMatch() {

  if (wordInput.value == currentWord.innerHTML) {

    showWord(words);
    wordInput.value = '';
    score++;
    message.innerHTML = 'Correct!!!';

  } else {
    message.innerHTML = '';
  }
  localStorage.setItem("score", score);
  scoreDisplay.innerHTML = score;


}


// Countdown timer 
function countdown() {
  if (time > 0) {
    time--
  }
  else if (time == 0) {
    // Game is Over 

    document.body.classList.add("text-black");
    document.body.innerHTML =
      `
<header class=" btn-light text-center p-2 mb-4">
    <h1>Typing Game</h1>
  </header>



  <div class=" d-flex align-items-center justify-content-center" style="height: 450px;">
    <div class="text-lg-center mb-5  col-md-6 mx-auto ">
      <div class="mb-4">
        <h2 >Game Over!!!</h2>

      </div>
    <div class="row mt-1">
      <div class="  col-sm-6 ">
        <h3>Your Score:
          <span  id="score1">0</span>
        </h3>
      </div>
      <div class="col-sm-6 ">
        <button type="button" id="playagain" class="btn btn-danger">Play again</button>
  
      </div>
    </div>
    </div>
  </div>
 `
    var x = localStorage.getItem("score");
    document.getElementById('score1').innerHTML = x;

    function Playagain() {

      window.location.reload();


    }
    document.getElementById('playagain').onclick = Playagain;


  }
  timeDisplay.innerHTML = time;

}

