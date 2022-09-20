import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";

router.post("/login", authUser);
router.route("/profile", getUserProfile);
router.route("/").post(registerUser);

export default router;
