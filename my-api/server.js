require('dotenv').config();
const express = require('express');

const mysql = require('mysql2/promise');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const pool = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const cardRoutes = require("./routes/cardRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const phoneTopupRoutes = require("./routes/phoneTopupRoutes");
const dataTopupRoutes = require("./routes/dataTopupRoutes");
const userWalletRoutes  = require("./routes/userwalletRoutes");
const eWalletRoutes  = require("./routes/ewalletRoutes");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(loginRoutes);
app.use(cardRoutes);
app.use(transactionRoutes);
app.use(phoneTopupRoutes);
app.use(dataTopupRoutes);
app.use(userWalletRoutes);
app.use(eWalletRoutes);

app.get("/", (req,res) =>{
  res.send("API IS RUNNING")
});

 
(async () => {
    try {
      const conn = await pool.getConnection();
      console.log('✅ Database connected!');
      conn.release();
   const PORT = process.env.PORT || 4000;

   
      app.listen(PORT, () => {
        console.log('🚀 Server running at http://localhost:4000');
      });
    } catch (err) {
      console.error('❌ Database connection failed:', err.message);
      process.exit(1);
    }
  })();