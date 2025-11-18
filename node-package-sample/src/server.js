import express from "express";
import path from "path";

const app = express();

// Middle ware
app.use("/static", express.static(path.join(process.cwd(), "public")));

// Set correct views folder
app.set("views", path.join(process.cwd(), "src/views"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "About Page" });
});

export default app;
