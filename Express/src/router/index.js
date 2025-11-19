import express, { Router } from "express";
import user from "./user/index.js";
import admin from "./admin/index.js";
import authRouter from "../modules/auth/auth.routes.js";

const router = Router();

// Body Parser Middleware - ADD THESE BEFORE OTHER MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/users", user);
router.use("/admin", admin);
router.use("/api/auth", authRouter);

export default router;
