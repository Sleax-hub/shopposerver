const express = require('express')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    createAt:{
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;