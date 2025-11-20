import authService from "./auth.service.js";

class AuthController {
  async signup(req, res) {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty" });
      }

      const result = await authService.signup(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.render("admin/login", {
          error: "Email and password are required",
        });
      }

      const result = await authService.login({ email, password });

      // Set session for admin login
      req.session.user = result.user;

      // Redirect to dashboard
      return res.redirect("/admin/dashboard");
    } catch (error) {
      return res.render("admin/login", { error: error.message });
    }
  }

  async updatePassword(req, res) {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty" });
      }

      // Add userId from authenticated user (assumes auth middleware sets req.user)
      const dataWithUserId = {
        ...req.body,
        userId: req.user?.id || req.body.userId,
      };

      const result = await authService.updatePassword(dataWithUserId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async me(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const result = await authService.me({ userId: req.user.id });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

const authController = new AuthController();
export default authController;
