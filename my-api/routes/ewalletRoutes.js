import express from 'express';
const router = express.Router();
import EWalletController from '../controllers/ewalletController.js';


router.get("/ewallet",EWalletController.getAllEWallets);
router.get("/ewallet/:id",EWalletController.getEWalletById);
router.post("/ewallet", EWalletController.createEWallet);
router.put("/ewallet/:id", EWalletController.updateEWallet);
router.delete("/ewallet/:id", EWalletController.deleteEWallet);

export default router;
