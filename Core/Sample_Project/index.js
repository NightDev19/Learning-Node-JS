import fsPromises from "fs/promises";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  rl.question(
    "1.) Write the file\n2.) Read the file\n3.) Exit\nChoose : ",
    async (input) => {
      switch (input) {
        case "1":
          rl.question("Enter text to write: ", async (text) => {
            await fsPromises.writeFile("sample.txt", text);
            console.log("File written successfully");
            menu(); // go back to menu
          });
          break;

        case "2":
          try {
            const data = await fsPromises.readFile("sample.txt", "utf8");
            console.log(data);
          } catch (err) {
            console.log("Error reading file:", err.message);
          }
          menu(); // go back to menu
          break;

        case "3":
          console.log("Exiting...");
          rl.close();
          break;

        default:
          console.log("Invalid option");
          menu(); // go back to menu
      }
    },
  );
}

menu();
