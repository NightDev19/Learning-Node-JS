import { Router } from "express";
import authController from "../../middlewares/auth/auth.controller.js";
import authMiddleware from "../../middlewares/auth/auth.middleware.js";
const authRouter = Router();

authRouter.post("/signup", authController.signup);
/*
## 10. Test Endpoints

**Signup:**
```
POST http://localhost:3000/api/auth/signup
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
*/
authRouter.post("/login", authController.login);
/*
**Login:**
```
POST http://localhost:3000/api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
*/

authRouter.post("/update-password", authController.updatePassword);
/*
**Update Password:**
```
POST http://localhost:3000/api/auth/update-password
{
  "userId": "user123",
  "oldPassword": "oldpassword123",
  "newPassword": "newpassword123"
}
*/

authRouter.get("/me", authMiddleware, authController.me);
/*
**Get User Profile:**
```
GET http://localhost:3000/api/auth/me
*/

export default authRouter;
