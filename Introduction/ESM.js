/*
ECMAScript Module (ESM) is the modern module system for Node.js. It uses import and export statements to import and export modules.

Characteristics:

- Uses import and export syntax.
- Cleaner and more standardized.
- Works natively with TypeScript and modern bundlers.
*/
import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
  resasdsdas;
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use.`);
  } else {
    console.error(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
