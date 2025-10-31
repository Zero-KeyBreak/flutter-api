const EWallet = require("../models/ewalletModel");

exports.getAllEWallets = async (req, res) => {
  try {
    await EWallet.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getEWalletById = async (req, res) => {
  try {
    await EWallet.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createEWallet = async (req, res) => {
  try {
    await EWallet.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateEWallet = async (req, res) => {
  try {
    await EWallet.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteEWallet = async (req, res) => {
  try {
    await EWallet.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
