import express from 'express';
import UserController from '../controllers/userController.js';
const router = express.Router();


router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getUsersById);
router.post('/user', UserController.postUsers);
router.put('/user/:id', UserController.updateUsers);
router.delete('/user/:id', UserController.deleteUsers);

export default router;