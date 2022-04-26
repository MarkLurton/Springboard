const gameContainer = document.getElementById("game");
const startBtn = document.querySelector('.start');
const scoreBoard = document.createElement('div');
const bestBoard = document.createElement('div');
const score = document.createElement('span');
const best = document.createElement('span')


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


let flipped = 0;
let lastGuess;
let timeout = 0;
let turns = 0;
let matches = 0;

function handleCardClick(event) {

  if (!event.target.classList.contains('matched') && !timeout) {

    event.target.style.backgroundColor = event.target.className;

    if (flipped === 0) {
      lastGuess = event.target;
      flipped = 1;

    } else {
      if (event.target !== lastGuess) {
        turns += 1;
        if (event.target.className === lastGuess.className) {
            
            event.target.classList.add('matched')
            lastGuess.classList.add('matched')
            matches += 1;
            if (matches == COLORS.length/2) {
              if (JSON.parse(localStorage.getItem('best'))) {
                if (turns < JSON.parse(localStorage.getItem('best'))['best']) {
                  localStorage.setItem('best', JSON.stringify({'best': turns}));
                  best.innerText = turns;
                }
              } else {
                localStorage.setItem('best', JSON.stringify({'best': turns}));
                best.innerText = turns;
              }
            }

          } else {
            timeout = 1;
            setTimeout(function() {
              lastGuess.style.backgroundColor = 'white';
              event.target.style.backgroundColor = 'white';
              timeout = 0;
            }, 1000)
        }
        flipped = 0;
        score.innerText = turns;
      }
    }
  }
}

// when the DOM loads
startBtn.addEventListener('click', function(event) {
  
  createDivsForColors(shuffle(COLORS));

  const h1 = document.querySelector('h1');
  const restartBtn = document.createElement('button');
  

  restartBtn.innerText = 'New Game!';
  restartBtn.className = 'restart';
  restartBtn.addEventListener('click', function() {
    while (gameContainer.firstChild) {
      gameContainer.removeChild(gameContainer.firstChild);
    }

    createDivsForColors(shuffle(COLORS));

    flipped = 0;
    lastGuess;
    timeout = 0;
    turns = 0;
    matches = 0;
    score.innerText = 0;
  })
  bestBoard.className = 'board';
  scoreBoard.className = 'board';
  bestBoard.innerText = 'Top Score is: '
  scoreBoard.innerText = 'Current Score is: ';
  best.innerText = (JSON.parse(localStorage.getItem('best'))) ? JSON.parse(localStorage.getItem('best'))['best'] : '-';
  score.innerText = 0;
  scoreBoard.append(score);
  bestBoard.append(best);

  event.target.remove();
  h1.append(restartBtn);
  h1.append(scoreBoard);
  h1.append(bestBoard)
});
