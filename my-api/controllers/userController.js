const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    await User.getUser(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getUsersById = async (req, res) => {
  try {
    await User.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.postUsers = async (req, res) => {
  try {
    await User.postUser(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    await User.updateUser(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    await User.deleteUser(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
