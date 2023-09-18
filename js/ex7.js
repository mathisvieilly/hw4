const number = Math.min(Math.floor(Math.random() * 100) + 1, 100);

let guess = Number(prompt('Enter a guess between 1 and 100: '));

let guesses = 0;

while (guess !== number) {
  if (guess === number) {
    break;
  }
  if (guess < number) {
    alert('Too low, guess again');
  } else {
    alert('Too high, guess again');
  }
  guesses++;
  guess = Number(prompt('Enter a guess between 1 and 100: '));
}

alert(`Correct! It took you ${guesses} attempts to guess the correct number.`);