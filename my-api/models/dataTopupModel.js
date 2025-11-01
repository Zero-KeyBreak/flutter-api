import pool from "../config/db.js";

const DataTopup = {
  // ✅ Lấy tất cả gói data đã nạp
  getAll: async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT 
          data_topup_id,
          transaction_id,
          user_id,
          phone_number,
          provider,
          package_name,
          data_amount,
          price,
          duration_days,
          status,
          created_at
        FROM data_topups 
      `);
      return res.status(200).json(rows);
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Lấy theo ID
  getById: async (req, res) => {
    try {
    
      const [rows] = await pool.query(
        `SELECT 
          data_topup_id, transaction_id, user_id, 
          phone_number, provider, package_name, data_amount,
          price, duration_days, status, created_at
         FROM data_topups 
         WHERE data_topup_id = ?`,
        [id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ message: "Data topup not found" });
      }

      return res.status(200).json(rows[0]);
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Tạo mới data topup
  create: async (req, res) => {
    try {
      const {
        transaction_id,
        user_id,
        phone_number,
        provider,
        package_name,
        data_amount,
        price,
        duration_days,
        status,
      } = req.body;

      if (!transaction_id || !user_id || !phone_number || !provider || !package_name || !data_amount || !price) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const [result] = await pool.query(
        `INSERT INTO data_topups (
          transaction_id, user_id, phone_number, provider, package_name,
          data_amount, price, duration_days, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          transaction_id,
          user_id,
          phone_number,
          provider,
          package_name,
          data_amount,
          price,
          duration_days || null,
          status || "PENDING",
        ]
      );

      return res.status(201).json({
        message: "Data topup created successfully",
        data_topup_id: result.insertId,
      });
    } catch (error) {
      console.error("Error creating data topup:", error);
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Cập nhật trạng thái data topup
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({ message: "Missing status field" });
      }

      const [result] = await pool.query(
        `UPDATE data_topups SET status = ? WHERE data_topup_id = ?`,
        [status, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data topup not found" });
      }

      return res.status(200).json({ message: "Data topup updated successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Xóa data topup
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const [result] = await pool.query(
        "DELETE FROM data_topups WHERE data_topup_id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data topup not found" });
      }

      return res.status(200).json({ message: "Data topup deleted successfully" });
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },
};

export default DataTopup;
