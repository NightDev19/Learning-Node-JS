import "dotenv/config"; // load .env first
import express from "express";
import session from "express-session"; // <-- session support
import router from "./router/index.js";
import { requestLogger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

// -----------------------------
// View Engine
// -----------------------------
app.set("views", path.join(process.cwd(), "src/views"));
app.set("view engine", "ejs");

// -----------------------------
// Body Parsing Middleware
// -----------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// Session Middleware
// -----------------------------
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }, // 1 hour
  })
);

// -----------------------------
// Logger Middleware
// -----------------------------
app.use(requestLogger);

// -----------------------------
// Routes
// -----------------------------
app.get("/", (req, res) => {
  res.render("index");
});

// Mount main router (includes API and admin routes)
app.use("/", router);

// -----------------------------
// Error Handling Middleware
// -----------------------------
app.use(errorHandler);

export default app;
