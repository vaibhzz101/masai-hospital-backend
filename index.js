const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const UserRoutes = require('./routes/user.routes');
const  AppointRoutes= require('./routes/appointment.routes')
const connection  = require('mongoose');
require('dotenv').config();
app.use(bodyparser.urlencoded({
    extended : false
}));
app.use(bodyparser.json());
app.use('', (req,res)=> {
    res.send('welcome to masai healthcare....!')
})
app.use('',UserRoutes);
app.use('', AppointRoutes)
const PORT = process.env.PORT || 9090
app.listen(PORT, async() => {
    await connection;
    console.log(`server is running on PORT ${PORT}`)
})
