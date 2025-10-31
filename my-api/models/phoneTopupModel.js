const pool = require("../config/db");

const PhoneTopup = {
  // ✅ Lấy tất cả giao dịch nạp điện thoại
  getAll: async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT 
          topup_id,
          transaction_id,
          user_id,
          phone_number,
          provider,
          amount,
          status,
          created_at
        FROM phone_topups 
      `);
      return res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching phone topups:", error);
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Lấy giao dịch theo ID
  getById: async (req, res) => {
    try {
    
      const [rows] = await pool.query(
        `SELECT 
          topup_id, transaction_id, user_id,  
          phone_number, provider, amount, status,created_at
         FROM phone_topups 
         WHERE topup_id = ?`,
        [req.params.id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ message: "Phone topup not found" });
      }

      return res.status(200).json(rows[0]);
    } catch (error) {
      
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Tạo mới topup
  create: async (req, res) => {
    try {
      const { transaction_id, user_id, phone_number, provider, amount, status } = req.body;

      if (!transaction_id || !user_id || !phone_number || !provider || !amount) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const [result] = await pool.query(
        `INSERT INTO phone_topups (
          transaction_id, user_id, phone_number, provider, amount, status
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          transaction_id,
          user_id,
          phone_number,
          provider,
          amount,
          status || "PENDING",
        ]
      );

      return res.status(201).json({
        message: "Phone topup created successfully",
        topup_id: result.insertId,
      });
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Cập nhật topup
  update: async (req, res) => {
    try {
      
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({ message: "Missing status field" });
      }

      const [result] = await pool.query(
        `UPDATE phone_topups SET status = ? WHERE topup_id = ?`,
        [status, req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Phone topup not found" });
      }

      return res.status(200).json({ message: "Phone topup updated successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Xóa topup
  delete: async (req, res) => {
    try {
    
      const [result] = await pool.query(
        "DELETE FROM phone_topups WHERE topup_id = ?",
        [req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Phone topup not found" });
      }

      return res.status(200).json({ message: "Phone topup deleted successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PhoneTopup;
