// to read a file in node.js we need to use the fs module
const fs = require("fs");

// to read a file in node.js we need to use the fs module
fs.readFile(
  "/home/night/NightDev/NodeJs/Introduction/mini_project.js",
  "utf8", /* encoding to show the content of the file */
  (err, data) => {
    if (err) throw err;
    console.log(data);
  },
);
