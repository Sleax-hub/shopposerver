const express = require('express');
const { createUser, getUsers, getUserById, updateUserById, deleteUserById } = require('../controller/userController');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended:true}))

// create user
router.post('/createuser',createUser)
router.get('/allusers',getUsers)
router.get('/getuserbyid/:id',getUserById)
router.put('/updateuser/:id',updateUserById)
router.delete('/deleteuser/:id',deleteUserById)


module.exports = router;