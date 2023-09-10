const input = prompt("Please enter a number");


if (isNaN(input)) {
  console.log("Sorry, that is not a number.");
} else {
  for (let multiplier = 0; multiplier <= 10; multiplier++) {
    let result = multiplier * input;
    console.log(`${input} x ${multiplier} = ${result}`);
  }
}