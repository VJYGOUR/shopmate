import express from "express";
import { Router } from "express";
import { protect } from "../middleware/protect.js";
import { login, signup } from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
// router.post("/logout", logout);
//for trial
router.get("/dash", protect, (req, res) => {
  res.send("success");
});

export default router;
