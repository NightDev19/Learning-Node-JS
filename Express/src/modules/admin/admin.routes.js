import { Router } from "express";
import authController from "../../middlewares/auth/auth.controller.js";

const adminRouter = Router();

// Render login page
adminRouter.get("/login", (req, res) => {
  res.render("admin/login", { error: null });
  console.log("Login page rendered");
});

// Handle login form submission (Option A)
adminRouter.post("/login", async (req, res) => {
  // Pass req and res to controller
  // Controller will handle res.status/res.json
  await authController.login(req, res);
});

// Admin dashboard (protected with session)
const adminAuthMiddleware = (req, res, next) => {
  if (!req.session.user) return res.redirect("/admin/login");
  next();
};

adminRouter.get("/dashboard", adminAuthMiddleware, (req, res) => {
  res.render("admin/dashboard", { user: req.session.user });
});

export default adminRouter;
