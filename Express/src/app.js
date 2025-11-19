import "dotenv/config"; // load .env first
import express from "express";
import router from "./router/index.js";
import { requestLogger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import path from "path";

const app = express();
const port = process.env.PORT || 8080; // fallback if env not loaded

app.set("views", path.join(process.cwd(), "src/views"));
app.set("view engine", "ejs");

// Middleware
app.use(requestLogger);

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", router);
// Error Handler
app.use(errorHandler);

export default app;
