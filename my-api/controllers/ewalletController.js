import EWallet from '../models/ewalletModel.js';

const getAllEWallets = async (req, res) => {
  try {
    await EWallet.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getEWalletById = async (req, res) => {
  try {
    await EWallet.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createEWallet = async (req, res) => {
  try {
    await EWallet.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateEWallet = async (req, res) => {
  try {
    await EWallet.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteEWallet = async (req, res) => {
  try {
    await EWallet.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default  {
  getAllEWallets,
  getEWalletById,
  createEWallet,
  updateEWallet,
  deleteEWallet,
}