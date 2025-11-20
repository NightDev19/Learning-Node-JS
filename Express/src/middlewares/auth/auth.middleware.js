import jwt from "jsonwebtoken";
import prisma from "../../configs/prisma.js";

const authMiddleware = async (req, res, next) => {
  try {
    console.log("Authorization header:", req.headers.authorization);

    const token = req.headers.authorization?.split(" ")[1];
    console.log("Extracted token:", token);

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
