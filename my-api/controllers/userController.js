
import User from '../models/userModel.js'; 


const getUsers = async (req, res) => {
  try {
   
    await User.getUser(req, res); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    await User.getById(req, res); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postUsers = async (req, res) => {
  try {
    await User.postUser(req, res); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    await User.updateUser(req, res); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUsers = async (req, res) => {
  try {
    await User.deleteUser(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export default {
  getUsers,
  getUsersById,
  postUsers,
  updateUsers,
  deleteUsers,
};