import app from "./app.js";
const port = process.env.PORT || 8080;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
