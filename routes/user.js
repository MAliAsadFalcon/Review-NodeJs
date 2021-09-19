const express = require("express");
const router = express.Router();

const {
  getAll,
  login,
  signUp,
  getById,
  loggedIn,
  checkAuth,
  logout,
} = require("../controllers/user");

// controllers

router.get("/", getAll);
router.post("/login", login);
router.get("/loggedin", checkAuth, loggedIn);
router.delete("/logout", logout);
router.post("/signup", signUp);
router.get("/getbyid/:id", getById);

module.exports = router;
