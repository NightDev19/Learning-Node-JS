// URL Parsing Params API is a Method how to manipulate the qeury string of a URL
// this gives you an idea how the URL helps you to know what data did you pass on your endpoints
// ill give the example using WHATWG since the its more modern and recommended for new code

import { URL, URLSearchParams } from "url";

const link = new URL(
  "https://www.youtube.com/watch?v=ZPM-NUFXQJc&list=RDZPM-NUFXQJc&start_radio=1"
);

const params = new URLSearchParams(link.search);

// since we use the URLSearchParams we can use its methods to manipulate the query string
// now we get, add, update and delete the parameters then convert the query string back to a string
/*
First lets deconstruc the part of the link 

hostname            -> www.youtube.com
pathname            -> /watch? 
the query string    -> v=ZPM-NUFXQJc&list=RDZPM-NUFXQJc&start_radio=1
  - v               -> ZPM-NUFXQJc
  - list            -> RDZPM-NUFXQJc
  - start_radio     -> 1

now we doconstruct the query string part you should know the parts of a URL 
*/

// Now we use the params to manipulate the query string
//get the values of the parameters
const v = params.get("v");
const list = params.get("list");
const start = params.get("start_radio");
console.log(`
    This the parts of the Query of the URL

    The video id is ${v}
    The list id is ${list}
    The start radio is ${start}
    `);
// Lets add new query
params.append("autoplay", "1"); // here we add a new param &autoplay=1
console.log(params.toString());

// Lets delete a param
params.delete("start_radio"); // now we delete the start_radio param
console.log(params.toString());

// finally we can set a param its like updating a param
params.set("list", "NEWLISTID12345"); // now we update the list param
console.log(params.toString());
