const Transaction = require("../models/transactionModel");

exports.getTransactions = async (req, res) => {
  try {
    await Transaction.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    await Transaction.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.postTransaction = async (req, res) => {
  try {
    await Transaction.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    await Transaction.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
