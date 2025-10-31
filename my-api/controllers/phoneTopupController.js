const PhoneTopup = require("../models/phoneTopupModel");

exports.getAllTopups = async (req, res) => {
  try {
    await PhoneTopup.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTopupById = async (req, res) => {
  try {
    await PhoneTopup.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createTopup = async (req, res) => {
  try {
    await PhoneTopup.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateTopup = async (req, res) => {
  try {
    await PhoneTopup.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteTopup = async (req, res) => {
  try {
    await PhoneTopup.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
