import dotenv from 'dotenv';
import express from 'express';
dotenv.config({path: "C:\Users\Sang\Desktop\BackEndAPI\my-api\.env"});
import cors from 'cors';
import helmet from 'helmet';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import phoneTopupRoutes from './routes/phoneTopupRoutes.js';
import dataTopupRoutes from './routes/dataTopupRoutes.js';
import userWalletRoutes from './routes/userwalletRoutes.js';
import eWalletRoutes from './routes/ewalletRoutes.js';



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