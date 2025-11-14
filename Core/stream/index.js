// Example

import fs from "fs";

// create a readable stream from a file
const readableStream = fs.createReadStream("input.txt", "utf8"); // Create first a input.txt with a text inside it
// create a writeable stream to a file
const writableStream = fs.createWriteStream("output.txt");

// Pipe the data from readable to writable stream
readableStream.pipe(writableStream); // This line will copy the input.txt text content and pass it to output.txt

// Completion and Error Handling

writableStream.on("finish", () => {
  console.log("File Copy Completed");
});

readableStream.on("error", (err) => {
  console.error("Error handling File : ", err);
});

writableStream.on("error", (err) => {
  console.error("Error writing File : ", err);
});

readableStream.on("close", () => {
  console.log("File Read Completed");
});
