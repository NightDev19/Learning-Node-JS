// todosController.mjs
let todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Practice HTTP module", completed: false },
];

// Handle GET /todos
export function getTodos(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(todos));
}

// Handle POST /todos
export function createTodo(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    try {
      const newTodo = JSON.parse(body);
      newTodo.id = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
      newTodo.completed = newTodo.completed ?? false;
      todos.push(newTodo);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTodo));
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid JSON" }));
    }
  });
}

// Handle PUT /todos/:id
export function updateTodo(req, res, id) {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    try {
      const updatedTodo = JSON.parse(body);
      const index = todos.findIndex((t) => t.id === id);

      if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Todo not found" }));
      } else {
        todos[index] = { ...todos[index], ...updatedTodo };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todos[index]));
      }
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid JSON" }));
    }
  });
}

// Handle DELETE /todos/:id
export function deleteTodo(req, res, id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Todo not found" }));
  } else {
    todos = todos.filter((t) => t.id !== id);
    res.writeHead(204);
    res.end();
  }
}
