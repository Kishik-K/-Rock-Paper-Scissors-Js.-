function showResult(playerMove, cpuMove, result) {
  const el = document.getElementById('result');
  el.textContent = `You picked ${playerMove} — CPU picked ${cpuMove} — ${result}`;
  el.className = result === 'YOU WIN' ? 'win' : result === 'YOU LOSE' ? 'lose' : 'tie';
}

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

function playPaper() {
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
    result = 'YOU WIN';
  } else if (cpuMove === 'PAPER') {
    result = 'TIE';
  } else if (cpuMove === 'SCISSORS') {
    result = 'YOU LOSE';
  }

  showResult('PAPER', cpuMove, result);
}
