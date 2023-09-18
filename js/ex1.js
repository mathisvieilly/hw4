const number1 = prompt("Enter a number");
const number2 = prompt("Enter another number");
const operator = prompt("operator");

if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    console.log("Invalid operator");
} else if (isNaN(number1) || isNaN(number2)) {
    console.log("Invalid number");
} else {
  const result = eval(number1 + operator + number2);

  console.log(`${number1} ${operator} ${number2} = ${result}`)
}
