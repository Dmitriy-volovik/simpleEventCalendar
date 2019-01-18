const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost/users-db', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use('/api', require('./api'))
app.use('/ape/event', require('./apiEvent'))



app.listen(4006,()=>{
    console.log("Server is listening on 4006 port")
})