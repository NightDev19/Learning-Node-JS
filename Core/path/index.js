import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is how you join path
const file = path.join(__dirname, "sample.txt");

// Lets use the File so we can get all the basic methods of the path module
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));

// How to resolve the absolute path of a relative path
console.log(path.resolve(__dirname, "sample.txt")); // Absolute path of sample.txt, i add the __dirname to get the exact folder of the sample.txt

