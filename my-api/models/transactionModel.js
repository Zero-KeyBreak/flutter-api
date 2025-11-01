import pool from "../config/db.js";

const Transaction = {
  // ✅ Lấy tất cả giao dịch
  getAll: async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT 
          transaction_id, user_id, from_account, to_account, 
          to_phone, to_card_number, bank_code, amount, 
          transfer_method, transaction_type, description, 
          status, balance_after, reference_code, created_at, updated_at
        FROM transactions
        
      `);
      return res.status(200).json(rows);
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Lấy giao dịch theo ID
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const [rows] = await pool.query(
        "SELECT * FROM transactions WHERE transaction_id = ?",
        [id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      return res.status(200).json(rows[0]);
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Thêm giao dịch mới
  create: async (req, res) => {
    try {
      const {
        user_id,
        from_account,
        available_balance_before,
        transfer_method,
        to_account,
        to_phone,
        to_card_number,
        bank_code,
        amount,
        transaction_type,
        description,
        status,
        balance_after,
        reference_code,
        qr_id,
        wallet_id,
      } = req.body;

      if (!user_id || !from_account || !amount || !transaction_type || !transfer_method) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const [result] = await pool.query(
        `INSERT INTO transactions (
          user_id, from_account, available_balance_before, transfer_method, 
          to_account, to_phone, to_card_number, bank_code, amount, 
          transaction_type, description, status, balance_after, reference_code, 
          qr_id, wallet_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          user_id,
          from_account,
          available_balance_before || null,
          transfer_method,
          to_account || null,
          to_phone || null,
          to_card_number || null,
          bank_code || null,
          amount,
          transaction_type,
          description || null,
          status || "PENDING",
          balance_after || null,
          reference_code || null,
          qr_id || null,
          wallet_id || null,
        ]
      );

      return res.status(201).json({
        message: "Transaction created successfully",
        transaction_id: result.insertId,
      });
    } catch (error) {
      
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Cập nhật giao dịch
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        status,
        description,
        balance_after,
      } = req.body;

      const [result] = await pool.query(
        `UPDATE transactions 
         SET status = ?, description = ?, balance_after = ? 
         WHERE transaction_id = ?`,
        [status, description, balance_after, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Transaction not found" });
      }

      return res.status(200).json({ message: "Transaction updated successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Xóa giao dịch
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const [result] = await pool.query(
        "DELETE FROM transactions WHERE transaction_id = ?",
        [id]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      return res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },
};

export default Transaction;
