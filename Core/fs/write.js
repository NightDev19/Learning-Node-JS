// Since we know how to get the stat and read the file why not lets write a content in a file
/*
As we process we still using fs module to modify the File System
*/

import fs from "node:fs";
import fsPromises from "node:fs/promises";

// We will using the url and path module to get the file path of the file we need to write/modify on
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, "file.txt");

const content = "Some Content! Hello World";

fs.writeFile(file, content, (err) => {
  const data = fs.readFileSync(file, { encoding: "utf8" }); // Im using the synchronous Read File so we can do the task more smoothly also for short code HEHE
  if (err) {
    console.error(err);
  } else {
    console.log("Finished Writing on the File");
    console.log(`Data : ${data}`);
  }
});

// Lets do synchronous using the writeFile
// Like the read and stats they have the writeFileSync so we can do the task after one by another

try {
  //this block will be the whole function of write and read
  fs.writeFileSync(file, content); // we dont need to declare any variables here since it a API that calls to write a file
  const readFile = fs.readFileSync(file, { encoding: "utf8" }); // while here after the modification on the file it reads the content
  console.log(`Sync Data : ${readFile}`); // then print it here
} catch (err) {
  console.log(err);
}

// and lastly we will use the Promise
// the Synchronous we will use the try...catch method

try {
  await fsPromises.writeFile(file, content);
  const readFile = fsPromises.readFile(file, { encoding: "utf8" });
  console.log(`Data Async ${readFile}`);
} catch (err) {
  console.log(err);
}
