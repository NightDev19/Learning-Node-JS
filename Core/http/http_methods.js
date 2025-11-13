// http_methods.mjs
import { createServer } from "http";
import { URL } from "url";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./http_methods_controller.js";

const server = createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // --- CORS setup ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- Routing ---
  if (method === "GET" && pathname === "/todos") {
    getTodos(req, res);
  } else if (method === "POST" && pathname === "/todos") {
    createTodo(req, res);
  } else if (method === "PUT" && pathname.startsWith("/todos/")) {
    const id = parseInt(pathname.split("/")[2]);
    updateTodo(req, res, id);
  } else if (method === "DELETE" && pathname.startsWith("/todos/")) {
    const id = parseInt(pathname.split("/")[2]);
    deleteTodo(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
});
