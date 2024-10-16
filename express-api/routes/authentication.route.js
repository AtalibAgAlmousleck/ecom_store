import express from "express";
import {
  login,
  logout,
  register,
  refreshToken,
  getProfile,
} from "../controller/authentication.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/refresh-token", refreshToken);

// router.get("/profile", getProfile);

export default router;
