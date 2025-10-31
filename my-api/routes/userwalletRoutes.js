const express = require("express");
const router = express.Router();
const UserWalletController = require("../controllers/userwalletController");


router.get("/userwallet",UserWalletController.getAllUserWallets);
router.get("/userwallet/:id",  UserWalletController.getUserWalletById);
router.post("/userwallet", UserWalletController.createUserWallet);
router.put("/userwallet/:id", UserWalletController.updateUserWallet);
router.delete("/userwallet/:id",UserWalletController.deleteUserWallet);

module.exports = router;
