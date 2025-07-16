import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import CustomError from "../utils/customError.js";
dotenv.config;

export const adminAuth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) throw new CustomError("Access denied, token missing!", 400);
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
  if (!JWT_SECRET_KEY) throw new CustomError("Key missing!", 400);
  
  try {
      const verified = jwt.verify(token, JWT_SECRET_KEY);
      if (verified.role === "admin") {
      req.user = verified;
      next();
    } else {
      throw new CustomError("User not authorized!", 401);
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
