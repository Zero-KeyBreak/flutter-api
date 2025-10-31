const express = require("express");
const router = express.Router();
const Users = require("../controllers/userController");

router.get('/user', Users.getUsers);
router.get('/user/:id', Users.getUsersById);
router.post('/user',Users.postUsers);
router.put('/user/:id',Users.updateUsers);
router.delete('/user/:id',Users.deleteUsers);

module.exports = router;