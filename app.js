document.addEventListener('DOMContentLoaded', () => {
  const qwerty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');
  let missed = 0;

  const overlay = document.getElementById('overlay');
  const btnReset = document.querySelector('.btn__reset');

  const phrases = [
    `All that and a bag of chips`,
    `Talk to the Hand`,
    `Take A Chill Pill`,
    `Eat My Shorts`,
    `Hasta La Vista Baby`
  ];


  overlay.addEventListener('click', (e) => {
    overlay.style.display = 'none';
  });







});
