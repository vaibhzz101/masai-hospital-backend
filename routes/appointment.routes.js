const { Appointment } = require('../models/appointment.model')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth')
const jwt_Secret = process.env.secret_key || 'vaibhav'
const express = require('express');
const AppointRouter = express.Router();
AppointRouter.post('/appointemnts', auth, async(req,res)=> {
    const { name, image, specialization, experiene, location, date, slots, fee} = req.body;
    const appointemnt = new Appointment({ name, image, specialization, experiene, location, date, slots, fee });
    try{
        
        await appointemnt.save();
        res.status(201).json(appointemnt);

    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});
AppointRouter.get('/appointemnt', async(req,res)=> {
    try{
        const appointemnt = await Appointment.find();
        res.status(200).json(appointemnt);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})
module.exports = 
    AppointRouter;
