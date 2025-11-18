# We dont have any code here but you'll learn about package .json which is another important thing in the development

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
    npm install --save-dev nodemon jest eslint @babel/core @babel/cli @babel/preset-env @babel/preset-es2017
```

This will create a package-lock.json that shows the dependencies informations and also it makes a node_modules where you can find the packages that has been installed or downloaded

## How to use all the Package that you installed

- Step 4 : Create the app entry file (src/index.js)

Create a folder named 'src' and inside it create a file named 'index.js' with the content below

```javascript
    import express from 'express';

    const app = express();

    const port = process.env.PORT || 3000;

    app.get("/",(req,res)=>{
        res.send("Hello World");
    })
    app.listen(port,() =>{
        console.log(`Example app listening on port ${port}`)
    })
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
  import app from "../index.js"; // Make sure this path is correct!

  describe("GET /", () => {
    it("responds with Hello World", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello World");
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

- Step 7 : Replace/extend package.json (example final)

Open package.json and replace contents with the example below (or merge the scripts, type, engines, etc. into your existing file):

```json
{
  "name": "node-package-sample",
  "version": "1.0.0",
  "description": "Minimal Node.js sample demonstrating package.json structure",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon --watch . --ext js,json --inspect=9229 index.js",
    "test": "jest --coverage",
    "lint": "eslint . --ext .js",
    "prepare": "echo \"prepare script ran (example)\""
  },
  "keywords": ["node", "package.json", "example"],
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
    "express": "^4.18.2"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "jest": "^29.0.0",
    "nodemon": "^2.0.0"
  }
}

```

Key things to note in this package.json:

- "type": "module" — enables ES module syntax (import).
- scripts — includes start, dev (nodemon with inspector), test, lint, and prepare.
- engines — documents Node version requirements.
