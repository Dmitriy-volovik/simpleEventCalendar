const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    fromTime: String,
    tillTime: String,
    start: Number,
    duration: Number,
    _user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Events = mongoose.model('events', eventSchema);
module.exports = Events;