import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found\n");
  }
});

const port = 8080;
const hostname = "127.0.0.1";

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
