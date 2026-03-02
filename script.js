const score = JSON.parse(localStorage.getItem('rpsScore')) || { wins: 0, losses: 0, ties: 0 };

function updateScore(result) {
  if (result === 'YOU WIN') score.wins += 1;
  else if (result === 'YOU LOSE') score.losses += 1;
  else if (result === 'TIE') score.ties += 1;

  localStorage.setItem('rpsScore', JSON.stringify(score));

  document.querySelector('#score').textContent =
    `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

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

  updateScore(result);
  showResult('ROCK', cpuMove, result);
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

  updateScore(result);
  showResult('PAPER', cpuMove, result);
}

function playScissors() {
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
    result = 'YOU LOSE';
  } else if (cpuMove === 'PAPER') {
    result = 'YOU WIN';
  } else if (cpuMove === 'SCISSORS') {
    result = 'TIE';
  }

  updateScore(result);
  showResult('SCISSORS', cpuMove, result);
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('rpsScore');
  document.querySelector('#score').textContent = `Wins: 0 | Losses: 0 | Ties: 0`;
}

document.querySelector('.reset').addEventListener('click', resetScore);

document.querySelector('#score').textContent =
  `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
