const { URL } = require('url');

// Using the legacy API
// You'll see some of the API is underlined but it still working 
// Its deprecated so it shows a lined

const parsedUrl = require('url').parse('https://example.org:8080/p/a/t/h?query=string#hash');
console.log(parsedUrl.host); // 'example.org:8080'
console.log(parsedUrl.query); // 'query=string'