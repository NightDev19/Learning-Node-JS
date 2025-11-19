import request from "supertest";
import express from "express";
import router from "../router/index.js";

const app = express();
app.use(router);

describe("GET /admin", () => {
  it("should be accessible", async () => {
    const res = await request(app).get("/admin");
    expect(res.statusCode).toEqual(200);
  });
});
