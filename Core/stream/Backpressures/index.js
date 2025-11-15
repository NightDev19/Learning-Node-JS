import fs from "fs";

const writableStream = fs.createWriteStream("output.txt");

function writeData() {
  let i = 100;
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last time, close the stream
        writableStream.write("Last chunk!\n");
        writableStream.end();
      } else {
        // Continue writing data
        const data = `Data chunk ${i}\n`;
        // Write and check if we should continue
        ok = writableStream.write(data);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // We need to wait for the drain event before writing more
      writableStream.once("drain", write);
    }
  }
  write();
}

writeData();
writableStream.on("finish", () => {
  console.log("All data written successfully.");
});
