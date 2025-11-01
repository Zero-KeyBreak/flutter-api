import PhoneTopup from "../models/phoneTopupModel.js";

const getAllTopups = async (req, res) => {
  try {
    await PhoneTopup.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTopupById = async (req, res) => {
  try {
    await PhoneTopup.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTopup = async (req, res) => {
  try {
    await PhoneTopup.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTopup = async (req, res) => {
  try {
    await PhoneTopup.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTopup = async (req, res) => {
  try {
    await PhoneTopup.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  getAllTopups,
  getTopupById,
  createTopup,
  updateTopup,
  deleteTopup,
};