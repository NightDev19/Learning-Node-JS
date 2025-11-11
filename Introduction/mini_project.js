import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostname = "127.0.0.1";
const port = 8080;

const routes = {
  "/": async (req, res) => {
    try {
      const data = await readFile(join(__dirname, "index.html"), "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading index.html");
    }
  },
  "/about": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page\n");
  },
};

const routeHandler = (req, res) => {
  const route = routes[req.url];
  if (route) {
    route(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
};

const server = createServer(routeHandler);

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${port} already in use`);
  } else {
    console.error(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
