import { Router } from "./router.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { serveFile } from "../helper/fileHelper.js";

export const router = new Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Home route
router.get("/", async (req, res) => {
  const file = join(__dirname, "../templates/index.html");
  await serveFile(res, file);
});

// About route (text only)
router.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("This is the About Page.");
});

// POST route
router.post("/data", (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));
  req.on("end", () => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Data received", data: body }));
  });
});
