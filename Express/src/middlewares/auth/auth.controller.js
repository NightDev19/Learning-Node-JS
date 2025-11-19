import authService from "./auth.service.js";

class AuthController {
  async signup(req, res) {
    try {
      console.log("Request body:", req.body); // Add this debug line

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
      console.log("Request body:", req.body); // Add this debug line

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is empty" });
      }

      const result = await authService.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
  async updatePassword(req, res) {
    try {
      console.log("Request body:", req.body);
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
}

const authController = new AuthController();
export default authController;
