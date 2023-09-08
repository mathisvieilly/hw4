const input = prompt("Please enter a number between 1 and 100");

if (isNaN(input)) {
  console.log(`Sorry, ${input} is not a number.`);
} else {
  const num = Number(input);
  if (!Number.isInteger(Number(input))) {
    console.log(`Sorry, ${input} is not an integer.`);
  } else {
    if (num > 0 && num <= 100) {
      console.log(`Thank you! You entered ${num}, a valid number.`);
    } else {
      console.log(`Sorry, ${num} is not a valid entry.`);
    }
  }
}
