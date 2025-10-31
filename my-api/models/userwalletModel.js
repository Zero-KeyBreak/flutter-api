const pool = require("../config/db");

const UserWallet = {
  // ✅ Lấy tất cả liên kết ví
  getAll: async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT 
          user_wallet_id,
          user_id,
          wallet_id,
          linked_phone,
          account_name,
          linked_at,
          status
        FROM user_wallets
        
      `);

      return res.status(200).json(rows);
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Lấy theo ID
  getById: async (req, res) => {
    try {
    

      const [rows] = await pool.query(`
        SELECT 
          user_wallet_id,
          user_id,
          username,
          wallet_id,
          wallet_name,
          linked_phone,
          account_name,
          linked_at,
          status
        FROM user_wallets 
        WHERE user_wallet_id = ?
      `, [req.params.id]);

      if (rows.length === 0) {
        return res.status(404).json({ message: "User wallet not found" });
      }

      return res.status(200).json(rows[0]);
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Tạo liên kết ví mới
  create: async (req, res) => {
    try {
      const { user_id, wallet_id, linked_phone, account_name, status } = req.body;

      if (!user_id || !wallet_id || !linked_phone) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const [result] = await pool.query(`
        INSERT INTO user_wallets (
          user_id, wallet_id, linked_phone, account_name, status
        ) VALUES (?, ?, ?, ?, ?)
      `, [
        user_id,
        wallet_id,
        linked_phone,
        account_name || null,
        status || "LINKED"
      ]);

      return res.status(201).json({
        message: "Wallet linked successfully",
       
      });
    } catch (error) {
     
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Cập nhật trạng thái ví
  update: async (req, res) => {
    try {
   
      const { status, account_name, linked_phone } = req.body;

      const [result] = await pool.query(`
        UPDATE user_wallets 
        SET status = ?, account_name = ?, linked_phone = ?
        WHERE user_wallet_id = ?
      `, [status, account_name, linked_phone, req.params.id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User wallet not found" });
      }

      return res.status(200).json({ message: "User wallet updated successfully" });
    } catch (error) {
    
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Xóa liên kết ví
  delete: async (req, res) => {
    try {
     
      const [result] = await pool.query(`
        DELETE FROM user_wallets WHERE user_wallet_id = ?
      `, [req.params.id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User wallet not found" });
      }

      return res.status(200).json({ message: "User wallet deleted successfully" });
    } catch (error) {
      
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = UserWallet;
