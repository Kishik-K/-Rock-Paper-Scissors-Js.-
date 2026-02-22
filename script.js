function playRock() {
  const randomNumber = Math.random();
  let cpuMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    cpuMove = 'ROCK';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    cpuMove = 'PAPER';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    cpuMove = 'SCISSORS';
  }

  let result = '';

  if (cpuMove === 'ROCK') {
    result = 'TIE';
  } else if (cpuMove === 'PAPER') {
    result = 'YOU LOSE';
  } else if (cpuMove === 'SCISSORS') {
    result = 'YOU WIN';
  }

  document.getElementById('result').textContent =
    'You picked ROCK — CPU picked ' + cpuMove + ' — ' + result;
}
