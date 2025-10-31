const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = {
   loginUsers: async (req,res) => {
     try {
      const SECRET_KEY = process.env.JWT_SECRET || "tansang"
        const {phone,password} = req.body;
        const [rows] = await pool.query(
            "SELECT * FROM users WHERE phone = ?",
            [phone]
        )
        const users = rows[0];
        const isMatch = await bcrypt.compare(password,users.password);
           if (!isMatch) return res.status(401).json({ message: "Invalid password" });

        const token =  jwt.sign(
            { id: users.user_id, username: users.username, phone:users.phone, cccd: users.cccd },
      SECRET_KEY,
      { expiresIn:"1d" }
        )
         return res.json({
      message: "Login successful",
      token,
      user: {
        id: users.user_id,
        phone: users.phone,
       
      },
    });
    
     } catch (error) {
        return res.status(500).json({message: error.message});
     }
   },
};
module.exports = Login;