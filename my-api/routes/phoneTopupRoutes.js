import express from 'express';
const router = express.Router();
import PhoneTopup from "../controllers/phoneTopupController.js";


// Bảo vệ bằng JWT
router.get("/phonetopup", PhoneTopup.getAllTopups);
router.get("/phonetopup/:id", PhoneTopup.getTopupById);
router.post("/phonetopup", PhoneTopup.createTopup);
router.put("/phonetopup/:id", PhoneTopup.updateTopup);
router.delete("/phonetopup/:id", PhoneTopup.deleteTopup);

export default router;
