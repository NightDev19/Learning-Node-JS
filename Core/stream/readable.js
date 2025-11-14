import { createReadStream } from "fs";

const readableStream = createReadStream("sample.txt", {
  encoding: "utf-8",
  highWaterMark: 64 * 1024,
});

readableStream.on("data", (chunk) => {
  console.log(`Receivced ${chunk.length} bytes of data`);
  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("File Read Completed");
});

readableStream.on("error", (err) => {
  console.error("Error handling File : ", err);
});
