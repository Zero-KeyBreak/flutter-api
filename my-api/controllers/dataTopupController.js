import DataTopup from "../models/dataTopupModel.js";

const getAllDataTopups = async (req, res) => {
  try {
    await DataTopup.getAll(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDataTopupById = async (req, res) => {
  try {
    await DataTopup.getById(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createDataTopup = async (req, res) => {
  try {
    await DataTopup.create(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateDataTopup = async (req, res) => {
  try {
    await DataTopup.update(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteDataTopup = async (req, res) => {
  try {
    await DataTopup.delete(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  getAllDataTopups,
  getDataTopupById,
  createDataTopup,
  updateDataTopup,
  deleteDataTopup,
}