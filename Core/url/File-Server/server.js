/*
This code is refactored to create a simple HTTP file server using Node.js. 
It listens on port 8080 and serves HTML files based on the requested URL path. 
If the root path ("/") is requested, it serves "summer.html" by default. For other paths, it attempts to serve the corresponding HTML file. If the file is not found, it responds with a 404 error.

*/

import { createServer } from "http";
import { URL } from "url";
import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// This block is used to get the current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This should be hidden in production code
const port = 8080;
const hostname = "localhost";

const server = createServer((req, res) => {
  const parsed = new URL(req.url, `http://${hostname}:${port}`);
  let pathname = parsed.pathname;

  if (pathname === "/") {
    pathname = "/summer.html";
  }

  const filename = path.join(__dirname, pathname);

  console.log("Reading file:", filename);

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
