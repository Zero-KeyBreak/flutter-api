import express from 'express';
const router = express.Router();
import UserWalletController from "../controllers/userwalletController.js";


router.get("/userwallet",UserWalletController.getAllUserWallets);
router.get("/userwallet/:id",  UserWalletController.getUserWalletById);
router.post("/userwallet", UserWalletController.createUserWallet);
router.put("/userwallet/:id", UserWalletController.updateUserWallet);
router.delete("/userwallet/:id",UserWalletController.deleteUserWallet);

export default router;
