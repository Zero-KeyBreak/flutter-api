const UserWallet = require("../models/userwalletModel");

exports.getAllUserWallets = async (req, res) => {
  try {
    await UserWallet.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getUserWalletById = async (req, res) => {
  try {
    await UserWallet.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createUserWallet = async (req, res) => {
  try {
    await UserWallet.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateUserWallet = async (req, res) => {
  try {
    await UserWallet.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteUserWallet = async (req, res) => {
  try {
    await UserWallet.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
