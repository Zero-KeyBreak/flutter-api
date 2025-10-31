const Login = require("../models/loginModel");

exports.loginUser = async (req,res) => {
  try {
   await Login.loginUsers(req,res);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}