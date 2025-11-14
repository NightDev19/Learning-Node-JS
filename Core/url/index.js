// URl is used to split a Web Address into readable parts

import url from "url";

let address = "http://localhost:8080/default.htm?year=2017&month=february";
let link = url.parse(address, true);

console.log(link.host); // this will show localhost:8080
console.log(link.pathname); // this will show /default.htm
console.log(link.search); // this will show ?year=2017&month=february

let qdata = link.query;
console.log(qdata.month); // this will show february

// lets make our own then save it to a txt file

import fs from "fs";

let adr = "http://localhost:8080/default.htm?year=2017&month=february";
let q = url.parse(adr, true);

let data = `Host : ${q.host}
Path Name : ${q.pathname}
Search : ${q.search}
Year : ${q.query.year}
Month : ${q.query.month}
`;

fs.writeFile("output.txt", data, (err) => {
  // this will create output.txt file
  if (err) throw err;
  console.log("Saved!");
});
