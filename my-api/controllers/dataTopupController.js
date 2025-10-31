const DataTopup = require("../models/dataTopupModel");

exports.getAllDataTopups = async (req, res) => {
  try {
    await DataTopup.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getDataTopupById = async (req, res) => {
  try {
    await DataTopup.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createDataTopup = async (req, res) => {
  try {
    await DataTopup.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateDataTopup = async (req, res) => {
  try {
    await DataTopup.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteDataTopup = async (req, res) => {
  try {
    await DataTopup.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
