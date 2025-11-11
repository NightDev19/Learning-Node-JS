//stat() is a function that returns a promise that resolves with a Stats object
//it takes a path as an argument and returns a promise that resolves with a Stats object

import fs from "node:fs";

fs.stat(
  "/home/night/NightDev/NodeJs/Introduction/mini_project.js",
  (err, stats) => {
    if (err) {
      console.error(err);
    }
    // we have access to the file stats in `stats`
    console.log(stats);
  },
);

// also can be used with sync method fs.statSync()

try {
  const stats = fs.statSync(
    "/home/night/NightDev/NodeJs/Introduction/mini_project.js",
  );
  console.log(stats);
} catch (err) {
  console.error(err);
}
