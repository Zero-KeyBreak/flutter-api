import express from 'express';
const router = express.Router();
import Login from '../controllers/loginController.js';

router.post("/login",Login.loginUser);

export default router;