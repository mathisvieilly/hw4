let hours = prompt("Enter hours: ");
let minutes = prompt("Enter minutes: ");
let seconds = prompt("Enter seconds: ");

if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
  console.log("Sorry, that is not a number.");
} else {
  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);

  const timeInSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
  const timeInSecondsPlusOne = timeInSeconds + 1;
  const hoursPlusOne = Math.floor(timeInSecondsPlusOne / (60 * 60)) % 24;
  const minutesPlusOne = Math.floor((timeInSecondsPlusOne / 60) % 60);
  const secondsPlusOne = timeInSecondsPlusOne % 60;

  console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
  console.log(`One second later: ${hoursPlusOne}h${minutesPlusOne}m${secondsPlusOne}s`);
}