// Now we will get the method and URL from the request

import { createServer } from "http";
import url from "url";
const port = 8080;
const hostname = "localhost";

const server = createServer((req, res) => {
  // Here we will create the path that gets method and URL
  if (req.url === "/") {
    const { method, url } = req;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ method, url }));
  }
  // path for parsing URL
  if (req.url === "/parse") {
    const parsedUrl = url.parse(req.url, true);

    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ pathname, query }));
  }

  // path for using query string
  if (req.url === "/query") {
    const basedUrl = "http://" + req.headers.host + "/";
    const parsedUrl = new URL(req.url, basedUrl);
    const params = Object.fromEntries(parsedUrl.searchParams);

    const queryObj = {
      name: "Kj",
      age: 23,
      city: "New York",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify(
        { path: parsedUrl.pathname, params, queryObj: queryObj },
        null,
        2
      )
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
