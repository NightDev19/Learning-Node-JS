// Demonstrates basic Node.js global objects and functions

// Logs a simple message
console.log("Hello from Node.js!");

// Shows current directory name
console.log("Current directory:", __dirname);

// Shows the full path of this file
console.log("Current file:", __filename);

// Access environment info and arguments
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Process ID:", process.pid);

// Logs all process arguments (after node and file name)
console.log("Command line arguments:", process.argv.slice(2));
