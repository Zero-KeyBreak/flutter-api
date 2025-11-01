import Transaction from "../models/transactionModel.js";

const getTransactions = async (req, res) => {
  try {
    await Transaction.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    await Transaction.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postTransaction = async (req, res) => {
  try {
    await Transaction.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    await Transaction.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await Transaction.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
   getTransactionById,
   getTransactions,
   postTransaction,
   updateTransaction,
   deleteTransaction

}