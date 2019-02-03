const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const dbRoute = 'mongodb://user1:345qwe@ds119795.mlab.com:19795/singleventdb'
// mongoose.connect('mongodb://localhost/users-db', { useNewUrlParser: true });
mongoose.connect(dbRoute, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use('/api', require('./api'))
app.use('/ape/event', require('./apiEvent'))


const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 4006;
app.listen(PORT,()=>{
    console.log("Server is listening on 4006 port")
})