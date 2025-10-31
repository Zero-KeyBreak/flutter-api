const express = require("express");
const router = express.Router();
const EWalletController = require("../controllers/ewalletController");


router.get("/ewallet",EWalletController.getAllEWallets);
router.get("/ewallet/:id",EWalletController.getEWalletById);
router.post("/ewallet", EWalletController.createEWallet);
router.put("/ewallet/:id", EWalletController.updateEWallet);
router.delete("/ewallet/:id", EWalletController.deleteEWallet);

module.exports = router;
