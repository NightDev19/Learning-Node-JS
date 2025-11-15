import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your age: ", (age) => {
  age = Number(age); // convert string to number
  console.log(`You are ${age} years old`);

  if (age < 18) {
    console.log("You are not old enough to vote.");
  } else {
    console.log("You are old enough to vote.");
  }

  rl.close();
});
