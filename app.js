document.addEventListener('DOMContentLoaded', () => {
  const qwerty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');
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


  overlay.addEventListener('click', (e) => {
    overlay.style.display = 'none';
  });

  function getRandomPhraseAsArray(arr){
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomPhrase);
    return randomPhrase;
  }

  function addPhrasetoDisplay(arr) {
    const ul = document.querySelector('ul');
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

  

});
