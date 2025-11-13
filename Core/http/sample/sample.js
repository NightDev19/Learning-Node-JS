// server.mjs
import http from "http";
import { router } from "./router/routes.js";

const PORT = 8080;

const server = http.createServer((req, res) => {
  router.handle(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
