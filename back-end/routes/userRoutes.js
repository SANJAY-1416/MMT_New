const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authControllers");
const { protect } = require("../middleware/authMidlleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
