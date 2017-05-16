const mongoose = require('mongoose');
const config = require('../config/database');

//Event Schema
const EventSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    start: {
        type: String,
        required: true
    },

    end: {
        type: String
    },

    description: {
        type: String
    },

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
});

const event = module.exports = mongoose.model('Event', EventSchema);

module.exports.getEvents = function(event, callback) {
    event.find(event, callback);
}
module.exports.addEvent = function(newEvent, callback) {
    newEvent.save(callback);
}