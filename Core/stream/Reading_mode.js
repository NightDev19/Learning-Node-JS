import { createReadStream } from "fs";

// Paused Mode is a reading mode that allows the user to pause the reading process and resume it later.
// Paused Mode example
const readableStream = createReadStream("example.txt", {
  encoding: "utf8",
  highWaterMark: 64 * 1024, // 64KB Chunk
});

// Manually consume the stream using read()
readableStream.on("readable", () => {
  let chunk;
  while ((chunk = readableStream.read()) !== null) {
    console.log(chunk);
  }
});

readableStream.on("end", () => {
  console.log("Stream ended");
});

readableStream.on("error", (err) => {
  console.error("Error occurred:", err);
});
