/*
Common JS (CJS) is the original module system for Node.js. It uses the require() function to import modules and exports them using module.exports.
Characteristics:

- Uses require() to import and module.exports to export.
- Files typically have .js extension.
- Default in Node.js before v13 (still widely used in older projects).

*/

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
