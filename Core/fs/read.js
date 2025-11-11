// Import the fs module for callback and sync methods
import fs from "node:fs";
// Import fs/promises for promise-based methods
import fsPromises from "node:fs/promises";

const file = "/home/night/NightDev/NodeJs/Introduction/mini_project.js";

// --- 1. Callback-based async read ---
fs.readFile(file, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file (callback):", err);
    return;
  }
  console.log("Callback read:\n", data);
});

// --- 2. Synchronous read ---
try {
  const data = fs.readFileSync(file, "utf8");
  console.log("Sync read:\n", data);
} catch (err) {
  console.error("Error reading file (sync):", err);
}

// --- 3. Promise-based async read ---
try {
  const data = await fsPromises.readFile(file, { encoding: "utf8" });
  console.log("Promise read:\n", data);
} catch (err) {
  console.error("Error reading file (promise):", err);
}
