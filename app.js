document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');
  const keyboard = document.querySelector('#qwerty');
  const phrase = document.getElementById('phrase');
  const scoreboard = document.getElementById('scoreboard');
  let missed = 0;

  const overlay = document.getElementById('overlay');
  const btnReset = document.querySelector('.btn__reset');


  const phrases = [
    `all that and a bag of chips`,
    `talk to the hand`,
    `take a chill pill`,
    `eat my shorts`,
    `hasta la vista baby`
  ];
  const phraseArray = getRandomPhraseAsArray(phrases);

// remove overlay at start of game
  overlay.addEventListener('click', (e) => {
    overlay.style.display = 'none';
  });

// function to pull a random phrase as an array
  function getRandomPhraseAsArray(arr){
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomPhrase);
    return randomPhrase;
  }
// function to add random phrase to board game
  function addPhrasetoDisplay(arr) {
    for (let i = 0; i < arr.length; i +=1) {
     const li = document.createElement('li');
     li.textContent = arr[i];
     ul.appendChild(li);
     if ( arr[i] !== ' '){
        li.className = 'letter';
      } else {
        li.className = 'space';
      }
    }
  }
  addPhrasetoDisplay(phraseArray);

// function comparing whether a guess
// matches a letter from phrase
  function checkLetter(guess) {
    const letterAnswers = document.querySelectorAll('.letter');
    const li = document.querySelectorAll('.letter');
    console.log(letterAnswers);
    let match;
    for (let i = 0; i < letterAnswers.length; i +=1) {
      let show = letterAnswers[i].textContent;
      if (show === guess) {
        li[i].className += ' show';
        match = show;
      }
    }
    return match;
  }

// function that will  edit screen on win or lose
  function checkWin() {
    const show = document.querySelectorAll('.show');
    const li = document.querySelectorAll('.letter');
    const h1 = document.createElement('h1');
    if (show.length === li.length) {
      overlay.style.display = 'inline';
      h1.textContent = 'YOU WIN!';
      overlay.appendChild(h1);
      overlay.className = 'win';
    } else  if (missed === 5) {
      overlay.style.display = 'inline';
      h1.textContent = 'YOU LOSE!';
      overlay.appendChild(h1);
      overlay.className = 'lose';
    }
  }

// event handler for letter clicking
  keyboard.addEventListener('click', (e) => {
    const guess = e.target.textContent;
    console.log(guess);
    if (e.target.tagName === 'BUTTON') {
      e.target.className += ' chosen';
      e.target.setAttribute('disabled', 'true');
    }
    const letterFound = checkLetter(guess);
    if (letterFound === undefined && e.target.tagName === 'BUTTON') {
      const ol = document.querySelector('ol');
      const tries = document.querySelector('.tries');
      ol.removeChild(tries);
      missed += 1;
    }
    checkWin();
  });

});
