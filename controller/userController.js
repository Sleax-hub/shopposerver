const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/UserModel');

// create new user
const createUser = async(req, res)=>{

    const {name, email, phone, password} = req.body;
    try {
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // create a new user document in the database
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword
        })
        res.status(200).json(user);
        console.log(user);

    } catch (error) {
        console.log('user creating failed',error);
        res.status(500).json({message: error.message});
        
    }
}

// get all users
const getUsers =  async(req, res)=>{

    try {
        const users = await User.find();
        if(!users){
            return res.status(400).json({message: "No users found"});
        }
        res.status(201).json(users);
        
    } catch (error) {
        console.log("error fetching users", error);
        res.status(500).json({message: error.message});
        
    }
}

// get user by id
const getUserById = async(req, res)=>{

    const {id} = req.params;

    try {
        const user = await User.findById(id)
        if(!user) {
            return res.status(400).json({message: "user not found"});

        }
        res.status(200).json(user)
        console.log(user)
        
    } catch (error) {
        console.log("error fetching users", error);
        res.status(500).json({message: error.message});
        
    }
}

// update user by id
const updateUserById = async(req, res)=>{
    const {id} = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any user in database
        if(!user){
            return res.status(400).json({message: `cannot find any user with ID ${id}`})
        }
        const updatedUser = await User.findById (id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        console.log("error fetching users", error);
        res.status(500).json({message: error.message});
        
    }
}

// delete user by id
const deleteUserById = async(req, res)=>{
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        // we cannot find any user in database
        if(!user){
            return res.status(400).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json({message: `User with ID ${id} has been deleted`});
        
    } catch (error) {
        console.log("error fetching users", error);
        res.status(500).json({message: error.message});
        
    }
}

module.exports ={
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}