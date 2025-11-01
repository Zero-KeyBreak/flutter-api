import express from 'express';
const router = express.Router();
import DataTopup from '../controllers/dataTopupController.js';


router.get("/datatopup", DataTopup.getAllDataTopups);
router.get("/datatopup/:id", DataTopup.getDataTopupById);
router.post("/datatopup", DataTopup.createDataTopup);
router.put("/datatopup/:id", DataTopup.updateDataTopup);
router.delete("/datatopup/:id", DataTopup.deleteDataTopup);

export default router;
