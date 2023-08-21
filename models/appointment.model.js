const mongoose = require('mongoose');
const appointSchema = new mongoose.Schema({
    name: String,
    image: String,
    specialization: String,
    experience: Number,
    loaction: String,
    date: Date,
    slots : Number,
    fee: Number,
});
const AppointModel = mongoose.model('Appointment', appointSchema)
module.exports = 
 AppointModel;