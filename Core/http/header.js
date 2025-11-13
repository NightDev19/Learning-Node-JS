// Here we will discuss HTTP Headers in Node.js

// HTTP Headers are key-value pairs sent between the client and server
// They provide essential information about the request or response

// Common HTTP Headers include:
// - Content-Type: Indicates the media type of the resource
// - Authorization: Contains credentials for authenticating a user agent with a server
// - User-Agent: Contains information about the user agent originating the request

// Example of setting headers in a Node.js HTTP server

/*
One of the example of adding a header in Node.js HTTP server is shown below:

    using res or response we can pass the headers

    res.setHeader('Content-Type', 'application/json');

This sets the Content-Type header to application/json for the response.

or we can also use multiple headers as shown below:

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token_value'
    });

This sets multiple headers including Content-Type and Authorization for the response.
 */
import { createServer } from "http";

const port = 8080;
const hostname = "localhost";

const server = createServer((req, res) => {
  // Setting a single header
  res.setHeader("Content-Type", "text/html");
  // for multiple headers, you can use res.writeHead as shown below:

  res.writeHead(200, {
    "Custom-Header": "CustomHeaderValue",
    "X-Powered-By": "Node.js",
    "Set-Cookie": "sessionId=abc123; HttpOnly",
  });
  res.end("Hello, this response has a Content-Type header set to text/plain\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
