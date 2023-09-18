const value = prompt('Enter a word: ');

function countVowels(word) {
  let vowels = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y') {
      vowels++;
    }
  }
  return vowels;
}

function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

let vowels = countVowels(value);
let palindrome = isPalindrome(value);

console.log(`${value} contains ${vowels} vowels and is ${palindrome ? '' : 'not '}a palindrome`)