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
