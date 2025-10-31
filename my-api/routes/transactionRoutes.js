const express = require("express");
const router = express.Router();
const Transactions = require("../controllers/transactionController");

router.get("/transactions", Transactions.getTransactions);
router.get("/transactions/:id", Transactions.getTransactionById);
router.post("/transactions", Transactions.postTransaction);
router.put("/transactions/:id", Transactions.updateTransaction);
router.delete("/transactions/:id", Transactions.deleteTransaction);

module.exports = router;
