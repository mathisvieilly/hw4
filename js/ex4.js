const first = prompt("Enter first number");
const second = prompt("Enter second number");

if (isNaN(first) || isNaN(second)) {
  console.log("Sorry, one of those is not a number.");
} else {
  const firstInteger = Number(first);
  const secondInteger = Number(second);

  if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) {
    console.log("Sorry, one of those is not an integer.");
  } else if (secondInteger === 0) {
    console.log("Sorry, you cannot divide by zero.");
  } else {
    printResults(firstInteger, secondInteger);
  }
}

function printResults(first, second) {
  console.log(`${first} + ${second} = ${first + second}`);
  console.log(`${first} - ${second} = ${first - second}`);
  console.log(`${first} * ${second} = ${first * second}`);
  console.log(`${first} / ${second} = ${first / second}`);
  console.log(`${first} % ${second} = ${first % second}`);
}
