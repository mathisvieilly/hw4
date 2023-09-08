const day = prompt("Please enter a day of the week");

switch (day) {
  case "mon":
    printDay("Monday", "Tuesday");
    break;
  case "tue":
    printDay("Tuesday", "Wednesday");
    break;
  case "wed":
    printDay("Wednesday", "Thursday");
    break;
  case "thu":
    printDay("Thursday", "Friday");
    break;
  case "fri":
    printDay("Friday", "Saturday");
    break;
  case "sat":
    printDay("Saturday", "Sunday");
    break;
  case "sun":
    printDay("Sunday", "Monday");
    break;
  default:
    console.log("Sorry, you've entered an invalid day.");
    break;
}

function printDay(current, next) {
  console.log(`You entered: ${current}`);
  console.log(`The following day is: ${next}`);
}
