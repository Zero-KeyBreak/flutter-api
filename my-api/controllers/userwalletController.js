import UserWallet from '../models/userwalletModel.js';

const getAllUserWallets = async (req, res) => {
  try {
    await UserWallet.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserWalletById = async (req, res) => {
  try {
    await UserWallet.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUserWallet = async (req, res) => {
  try {
    await UserWallet.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUserWallet = async (req, res) => {
  try {
    await UserWallet.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUserWallet = async (req, res) => {
  try {
    await UserWallet.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  getAllUserWallets,
  getUserWalletById,
  createUserWallet,
  updateUserWallet,
  deleteUserWallet,
}