import { createReadStream } from "fs";

const readableStream = createReadStream("example.txt", {
  encoding: "utf8",
  highWaterMark: 10, // small chunks for demo
});

console.log("=== PAUSED MODE ===");

readableStream.once("readable", () => {
  const chunk = readableStream.read(5); // read only part of first chunk
  console.log("Paused Mode chunk:", chunk);

  console.log("=== SWITCH TO FLOWING MODE ===");

  // Now Flowing Mode will work, emitting remaining data
  readableStream.on("data", (chunk) => {
    console.log("Flowing Mode chunk:", chunk);
  });
});

readableStream.on("end", () => {
  console.log("Stream ended");
});
