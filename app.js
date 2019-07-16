document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');
  const keyboard = document.querySelector('#qwerty');
  const phrase = document.getElementById('phrase');
  const scoreboard = document.getElementById('scoreboard');
  let missed = 0;

  const overlay = document.getElementById('overlay');
  const btnReset = document.querySelector('.btn__reset');


  const phrases = [
    `raise the roof`,
    `talk to the hand`,
    `take a chill pill`,
    `eat my shorts`,
    `hasta la vista baby`,
    `alrighty then`,
    `how you doin`,
  ];
  const phraseArray = getRandomPhraseAsArray(phrases);

// remove overlay at start of game
  btnReset.addEventListener('click', (e) => {
    overlay.style.display = 'none';
  });

// function to pull a random phrase as an array
  function getRandomPhraseAsArray(arr){
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
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
    let match;
    for (let i = 0; i < letterAnswers.length; i +=1) {
      let show = letterAnswers[i].textContent;
      if (show === guess) {
        li[i].classList.add('spin');
        li[i].className += ' show';
        match = show;
      }
    }
    return match;
  }

// win or lose screen display
  function winOrLose(content, name) {
    let h1 = document.createElement('h1');
    overlay.style.display = 'inline';
    h1.textContent = content;
    btnReset.textContent = 'reset';
    overlay.appendChild(h1);
    overlay.className = name;
  }

// function that will  edit screen on win or lose
  function checkWin() {
    const show = document.querySelectorAll('.show');
    const li = document.querySelectorAll('.letter');
    if (show.length === li.length) {
      winOrLose('YOU WIN!', 'win');
    } else  if (missed === 5) {
      winOrLose('YOU LOSE!', 'lose');
    }
  }

/// event handler for letter clicking
  keyboard.addEventListener('click', (e) => {
    const guess = e.target.textContent;
    if (e.target.tagName === 'BUTTON') {
      e.target.className += ' chosen';
      e.target.setAttribute('disabled', 'true');
    }
    const letterFound = checkLetter(guess);
    if (letterFound === undefined && e.target.tagName === 'BUTTON') {
      const ol = document.querySelector('ol');
      const tries = document.querySelector('.tries');
      const li = document.createElement('li');
      const lostHeart = document.createElement('img');
      lostHeart.setAttribute('src', 'images/lostHeart.png');
      lostHeart.setAttribute('height', '35px');
      lostHeart.setAttribute('width', '30px');
      li.appendChild(lostHeart);
      ol.removeChild(tries);
      ol.appendChild(li);
      missed += 1;
    }
    checkWin();
  });

// reset keyboard after win or lose
function chosenReset() {
  const chosen = document.querySelectorAll('.chosen');
  for (let i = 0; i < chosen.length; i++) {
    chosen[i].className = ' ';
    chosen[i].removeAttribute('disabled');
  }
}

// reset hearts
function heartReset() {
  missed = 0;
  const ol = document.querySelector('ol');
  scoreboard.removeChild(ol);
  const newTries = document.createElement('ol');
  scoreboard.appendChild(newTries);
  for (let i= 0; i < 5; i++) {
    let li = document.createElement('li');
    newTries.appendChild(li);
    li.className = 'tries';
    const liveHeart = document.createElement('img');
    liveHeart.setAttribute('src', 'images/liveHeart.png');
    liveHeart.setAttribute('height', '35px');
    liveHeart.setAttribute('width', '30px');
    li.appendChild(liveHeart);
  }
}

//reset button
  btnReset.addEventListener('click', (e) => {
    if (btnReset.textContent === 'reset') {
      let ul = phrase.firstElementChild;
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      const phraseArray = getRandomPhraseAsArray(phrases);
      const h1 = document.querySelector('h1');
      overlay.removeChild(h1);
      addPhrasetoDisplay(phraseArray);
      chosenReset();
      heartReset();
    }
  });

});
