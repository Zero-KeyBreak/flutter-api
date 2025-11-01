import express from 'express'
const router = express.Router();
import Transactions from '../controllers/transactionController.js';

router.get("/transactions", Transactions.getTransactions);
router.get("/transactions/:id", Transactions.getTransactionById);
router.post("/transactions", Transactions.postTransaction);
router.put("/transactions/:id", Transactions.updateTransaction);
router.delete("/transactions/:id", Transactions.deleteTransaction);

export default router;
