let userInput = prompt('Enter a word: ');

while (userInput.toLowerCase() !== 'stop') {
  console.log(userInput);
  userInput = prompt('Enter a word: ');
}