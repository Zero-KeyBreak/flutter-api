const express = require("express");
const router = express.Router();
const Login = require("../controllers/loginController");

router.post("/login",Login.loginUser);

module.exports = router;