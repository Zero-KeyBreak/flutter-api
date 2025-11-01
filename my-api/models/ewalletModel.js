import pool from "../config/db.js";

const EWallet = {
  // ✅ Lấy tất cả ví điện tử
  getAll: async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT wallet_id, wallet_name, provider_code, logo_url, created_at
        FROM e_wallets
       
      `);
      return res.status(200).json(rows);
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Lấy ví theo ID
  getById: async (req, res) => {
    try {
   
      const [rows] = await pool.query(
        "SELECT * FROM e_wallets WHERE wallet_id = ?",
        [req.params.id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: "E-wallet not found" });
      }
      return res.status(200).json(rows[0]);
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Tạo ví điện tử mới
  create: async (req, res) => {
    try {
      const { wallet_name, provider_code, logo_url } = req.body;

      if (!wallet_name || !provider_code) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const [result] = await pool.query(
        `INSERT INTO e_wallets (wallet_name, provider_code, logo_url)
         VALUES (?, ?, ?)`,
        [wallet_name, provider_code, logo_url || null]
      );

      return res.status(201).json({
        message: "E-wallet created successfully",
       
      });
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Cập nhật ví điện tử
  update: async (req, res) => {
    try {
     
      const { wallet_name, provider_code, logo_url } = req.body;

      const [result] = await pool.query(
        `UPDATE e_wallets 
         SET wallet_name = ?, provider_code = ?, logo_url = ?
         WHERE wallet_id = ?`,
        [wallet_name, provider_code, logo_url, req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "E-wallet not found" });
      }

      return res.status(200).json({ message: "E-wallet updated successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Xóa ví điện tử
  delete: async (req, res) => {
    try {
    
      const [result] = await pool.query(
        "DELETE FROM e_wallets WHERE wallet_id = ?",
        [req.params.id]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "E-wallet not found" });
      }
      return res.status(200).json({ message: "E-wallet deleted successfully" });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },
};

export default EWallet;
