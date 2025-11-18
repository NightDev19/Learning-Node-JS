# NPM and Package Management
<!-- We dont have any code here but you'll learn about package .json which is another important thing in the development -->
## Initialize NPM Package

Here's the step by step how to use the package.json

- Step 1 : Create a folder and open it in your code editor
  
```bash
    mkdir folder-name
    cd folder-name
    code . (using vscode)
```

- Step 2 : Initialize package.json

---

```bash
    npm init
```

This creates a minimal package.json. We'll replace/extends it later.

- Step 3 : Install runtime and dev dependencies

---

``` bash
    # Run time dependency
    npm install express

    # Development tool (auto-save to devDependencies)
    npm install --save-dev nodemon jest eslint babel-jest @babel/core @babel/cli @babel/preset-env @babel/preset-es2017
```

This will create a package-lock.json that shows the dependencies informations and also it makes a node_modules where you can find the packages that has been installed or downloaded

## How to use all the Package that you installed

- Step 4 : Create the app entry file (src/index.js)

Create a folder named 'src' and inside it create a file named 'index.js' with the content below

```javascript
    import app from "./server.js";
  const port = process.env.PORT || 8080;
  const hostname = "localhost";

  app.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
  });

```

and server.js

```javascript
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/about',(req,res) =>{
  res.send("About Page")
})

export default app;

```

*__Note (Module system):__ The simple above uses ES Module (import). If you prefer  CommonJS either:*

- __"Set "type": "module"__ in __package.json"__ (Recommended for ESM) or
- "Change __import express from 'express';__ to __const express = require('express');__ and leave __'type'__ unset/default"

---

- Step 5 : Add a sinmple jest

Create test/index.test.js with the content below

```javascript
  // /src/test/index.test.js
import request from "supertest";
import app from "../server.js"; // Make sure this path is correct!

describe("GET /", () => {
  it("responds with Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});

describe("GET /about", () => {
  it("responds with About Page", async () => {
    const response = await request(app).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toBe("About Page");
  });
});

```

Create a babel.config.js so it convert all the test into ES5

```javascript
export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
      },
    ],
  ],
};
```

*__Note__* : babel.config.js for test = a compability later

It ensure your test runner can execute modern Javascript features that Node or Jest cannot interpret directly.

Create a jest.config.js with the content below

```javascript
export default {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json"],
};
```

*__Note__* : This Jest config enables Babel to dynamically transpile your JS files only during testing, using Jest's transform pipeline.

---

- Step 6 : Configure ESLint (optional quick setup)

Run the initializer (answers can be basic; choose a style you want):

``` bash
    npx eslint --init
```

This writes .eslintrc.*. If you prefer not to run it now, add lint script below and run later.

---

- Step 7 : Replace/extend package.json (example final)

Open package.json and replace contents with the example below (or merge the scripts, type, engines, etc. into your existing file):

```json
{
  "name": "node-package-sample",
  "version": "1.0.0",
  "description": "Minimal Node.js sample demonstrating package.json structure",
  "type": "module",
  "main": "dist/index.js",
  "scripts": {
    "clean": "rimraf dist",
    "build": "npm run clean && babel src --out-dir dist --extensions \".js,.mjs,.jsx\" --verbose",
    "start": "node dist/index.js",
    "dev": "nodemon --watch src --ext js,json --inspect=9229 src/index.js",
    "test": "jest --coverage",
    "lint": "eslint . --ext .js",
    "prepare": "echo \"prepare script ran (example)\""
  },
  "keywords": [
    "node",
    "package.json",
    "example"
  ],
  "author": "Your Name",
  "license": "MIT",
  "engines": {
    "node": ">=14"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourname/node-package-sample.git"
  },
  "bugs": {
    "url": "https://github.com/yourname/node-package-sample/issues"
  },
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.28.3",
    "@babel/core": "^7.28.5",
    "@babel/preset-env": "^7.28.5",
    "@eslint/js": "^9.39.1",
    "babel-jest": "^30.2.0",
    "eslint": "^8.57.1",
    "globals": "^16.5.0",
    "jest": "^29.7.0",
    "nodemon": "^2.0.0",
    "rimraf": "^6.1.0",
    "supertest": "^7.1.4"
  }
}

```

Key things to note in this package.json:

- "type": "module" — enables ES module syntax (import).
- scripts — includes start, dev (nodemon with inspector), test, lint, and prepare.
- engines — documents Node version requirements.

---

- Step 8 : Run the app and test scripts

Open a terminal in VS Code.

Start in production-like mode:

```bash
npm start
# Expected console: "Server listening on http://localhost:3000"
```

Start in development mode (auto-reloads, inspector enabled):

```bash
npm run dev
# nodemon watches files and restarts on changes; Node inspector runs on port 9229
```

Run tests:

```bash
npm test
# Jest runs; you should see test results and coverage
```

Run linter:

```bash
npm run lint
# ESLint checks files (requires config)
```

Verify the server response:

```bash
curl http://localhost:3000
# should return {"message":"Hello from node-package-sample"}
```

---

- Step 9 : Showing Data on HTML
  
Create a views folder on the src folder

```java
node-package-sample/
 ├─ node_modules/           ← installed packages
 ├─ dist/                   ← compiled backend (from Babel)
 ├─ public/                 ← static files (CSS, JS, images)
 │   └─ ...
 ├─ src/
 │   ├─ views/              ← templates
 │   │   └─ index.ejs       ← dynamic HTML
 │   ├─ index.js
 │   └─ server.js
 ├─ package.json
 └─ ...

```

Install a template engine

```bash
npm install ejs --save-dev
```

Configure Express to use EJS (with ES Modules) in server.js

```javascript
import express from "express";
import path from "path";

const app = express();

// Middle ware
app.use("/static", express.static(path.join(process.cwd(), "public")));

// Set correct views folder
app.set("views", path.join(process.cwd(), "src/views"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "About Page" });
});

export default app;

```

Also update your test into

```javascript
  import request from "supertest";
  import app from "../server.js";

  describe("GET /", () => {
    it("should render the index page with the correct title", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toEqual(200);
      expect(res.text).toContain("Home Page");
    });
  });

  describe("GET /about", () => {
    it("should render the about page with the correct title", async () => {
      const res = await request(app).get("/about");
      expect(res.statusCode).toEqual(200);
      expect(res.text).toContain("About Page");
    });
  });

  describe("Static Files", () => {
    it("should serve static files from the public directory", async () => {
      // Assuming you have a file named `test-file.txt` in your `public` directory
      const res = await request(app).get("/static/index.html");
      expect(res.statusCode).toEqual(200);
    });
  });
```
