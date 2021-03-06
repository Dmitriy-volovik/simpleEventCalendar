const express = require('express');
const routerEvent = express.Router();
const Events = require('./schemas/event');

routerEvent.get('/1', async(req, res) => {
    await Events.find({})
        .then(event => {
            res.send(event);
        })
});

routerEvent.post('/all', async(req,res) =>{
    const events = await Events.find({ _user: req.body.userId });
    console.log(events);
    res.send(events);
})

routerEvent.post('/add', async(req, res) => {
    await Events.create(req.body)
        .then(event => {
            res.send(event);
        })
});

routerEvent.put('/update', async(req, res) => {
    await Events.updateOne({ _id: req.body._id }, req.body)
         .then(() =>
            Events.find({_user: req.body._user})
         )
         .then(events => {
             res.send(events);
         })
});

routerEvent.delete('/delete', async(req, res) => {
    await Events.deleteOne({ _id: req.body._id })
        .then(() =>
            Events.find({ _user: req.body._user })
        )
        .then(events => {
            res.send(events);
        })
});

module.exports = routerEvent;