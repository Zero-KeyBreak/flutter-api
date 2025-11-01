import Login from '../models/loginModel.js';

const loginUser = async (req,res) => {
  try {
   await Login.loginUsers(req,res);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export default {
  loginUser
}