const { User } = require('../models/user.model')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt_Secret = process.env.secret_key || 'vaibhav'
const express = require('express');
const UserRouter = express.Router();
// signup
UserRouter.post('/auth/signup', async(req,res)=> {
    const {email,password} = req.body;
    try{
        const hashPass = await bcrypt.hash(password, 8);
        const user = new User({email, password : hashPass});
        await User.save();
        const token = jwt.sign({ userId: user._id}, jwt_Secret);
        res.status(201).json({success: true, token});

    }
    catch(err){
        res.status(500).json({success: false, message: 'Somenthing went wrong Signup Failed...!!'})
    }
})
// login

UserRouter.post('/auth/login', async(req,res)=> {
    const {email,password} = req.body;
    try{
        
        const user = new User({email, password : hashPass});
       if(!user){
        return res.status(401).json({success : false, message: 'wrong credentials'});

       }
       const isPassValid = await bcrypt.compare(password, user.password);
       if(!isPassValid){
        return res.status(401).json({success: false, message: 'wrong credentials..'})
       } 
        const token = jwt.sign({ userId: user._id}, jwt_Secret);
        res.status(201).json({success: true, token});

    }
    catch(err){
        res.status(500).json({success: false, message: 'Somenthing went wrong, Login Failed...!!'})
    }
})

module.exports = 
    UserRouter;
