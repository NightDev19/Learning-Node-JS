import { Router } from "express";
import userInfo from "../../modules/user/index.js";

const user = Router();

// GET /user
user.get("/", (req, res) => {
  res.send("Hello world user");
});

// GET /user/list
user.get("/list", async (req, res, next) => {
  try {
    const data = await userInfo.getUserInfo();
    res.render("student/list", { data });
  } catch (err) {
    next(err);
  }
});

export default user;
