const name = prompt("Please enter your name");

if (name === "") {
  console.log("Sorry, you must enter a name.");
} else {
  const units = prompt(
    "Please enter the number of units you have completed at college"
  );

  if (isNaN(units)) {
    console.log(`Sorry, ${units} is not a number.`);
  } else {
    const num = Number(units);
    if (!Number.isInteger(num)) {
      console.log(`Sorry, ${units} is not an integer.`);
    } else {
      if (num < 0) {
        console.log(`Sorry, ${num} is not a valid entry.`);
      } else {
        console.log(`Hello ${name}`);
        console.log(`Your grade standing is ${getGradeStanding(num)}`);
      }
    }
  }
}

function getGradeStanding(units) {
  if (units <= 30) {
    return "Freshman";
  } else if (units <= 60) {
    return "Sophomore";
  } else if (units <= 90) {
    return "Junior";
  } else {
    return "Senior";
  }
}
