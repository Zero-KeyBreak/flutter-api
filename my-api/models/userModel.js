import pool from "../config/db.js";
import bcrypt from 'bcrypt';


const User = {
  // ✅ Lấy toàn bộ user
  getUser: async (req, res) => {
    try {
      const [rows] = await pool.query(
        "SELECT user_id, username, stk, cccd, balance, phone FROM users"
      );
      return res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Lấy user theo ID
  getById: async (req, res) => {
    try {
      const [rows] = await pool.query(
        "SELECT user_id, username, stk, cccd, balance, phone FROM users WHERE user_id = ?",
        [req.params.id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Tạo user mới
  postUser: async (req, res) => {
    try {
      const { username, stk, phone, password, cccd } = req.body;

      if (!username || !stk || !phone || !password || !cccd) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(password, saltRounds);

      const [result] = await pool.query(
        "INSERT INTO users (username, stk, phone, password, cccd) VALUES (?, ?, ?, ?, ?)",
        [username, stk, phone, hashPassword, cccd]
      );

      return res
        .status(201)
        .json({ message: "User created successfully", user_id: result.insertId });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Cập nhật user
  updateUser: async (req, res) => {
    try {
      const { username, phone, cccd } = req.body;
      const id = req.params.id;

      const [result] = await pool.query(
        "UPDATE users SET username = ?, phone = ?, cccd = ? WHERE user_id = ?",
        [username, phone, cccd, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },

  // ✅ Xóa user
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;

      const [result] = await pool.query(
        "DELETE FROM users WHERE user_id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },
};

export default User;
