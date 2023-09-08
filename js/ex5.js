var password = prompt("Please enter your password");

const ATTEMPTS = 3;

var i;
for (i = 0; i < ATTEMPTS - 1; i++) {
  if (password === "secret") {
    break;
  }

  console.log("Sorry, that password is incorrect.");
  password = prompt("Please enter your password");
}

if (password === "secret") {
  console.log(`You entered the correct password after ${i + 1} attempt(s)`);
} else {
  console.log(
    `Your account is locked! You failed to enter the correct password ${
      i + 1
    } times`
  );
}
