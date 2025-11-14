const { URL } = require("url");

// Using the WHATWG URL API (recommended for new code)
// Its a modern way to handle the parsing the URL its more easy and more

const myURL = new URL(
  "https://www.youtube.com/watch?v=ZPM-NUFXQJc&list=RDZPM-NUFXQJc&start_radio=1"
);
console.log(myURL.hostname); // 'www.youtube.com'
console.log(myURL.pathname); // '/watch'
console.log(myURL.searchParams.get("v")); // 'string'
