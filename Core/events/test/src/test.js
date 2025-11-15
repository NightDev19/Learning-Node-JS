import { EventEmitter } from "node:events";
import { add, subtract, multiply, divide, modulo } from "./index.js";
import chalk from "chalk";

const eventEmitter = new EventEmitter();

// Counter for passed tests
let passedCount = 0;

// Helper wrapper to increment count
function countPassed(fn) {
  return (...args) => {
    try {
      const result = fn(...args);
      console.log(chalk.green("Test passed"));
      passedCount++;
      return result;
    } catch (err) {
      console.error(chalk.red("Test failed:", err.message));
    }
  };
}

eventEmitter.on(
  "add",
  countPassed((a, b) => {
    const result = add(a, b);
    console.log(chalk.blue("add result:"), chalk.green(result));
    return result;
  })
);

eventEmitter.on(
  "subtract",
  countPassed((a, b) => {
    const result = subtract(a, b);
    console.log(chalk.blue("subtract result:"), chalk.green(result));
    return result;
  })
);

eventEmitter.on(
  "multiply",
  countPassed((a, b) => {
    const result = multiply(a, b);
    console.log(chalk.blue("multiply result:"), chalk.green(result));
    return result;
  })
);

eventEmitter.on(
  "divide",
  countPassed((a, b) => {
    const result = divide(a, b);
    console.log(chalk.blue("divide result:"), chalk.green(result));
    return result;
  })
);

eventEmitter.on(
  "modulo",
  countPassed((a, b) => {
    const result = modulo(a, b);
    console.log(chalk.blue("modulo result:"), chalk.green(result));
    return result;
  })
);

eventEmitter.on(
  "percentage",
  countPassed((a, b) => {
    const result = (a / b) * 100;
    console.log(
      chalk.blue("percentage result:"),
      chalk.green(result.toFixed(2) + "%")
    );
    return result;
  })
);

// Emit events
eventEmitter.emit("add", 5, 3);
eventEmitter.emit("subtract", 5, 3);
eventEmitter.emit("multiply", 5, 3);
eventEmitter.emit("divide", 5, 0);
eventEmitter.emit("modulo", 5, 3);
eventEmitter.emit("percentage", 5, 3);

// Print total passed
console.log(chalk.yellow("Total Passed Tests:"), chalk.green(passedCount));

export { eventEmitter };
