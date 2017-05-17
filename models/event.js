const mongoose = require('mongoose');
const config = require('../config/database');
var Promise = require('promise');

//Event Schema
const EventSchema = mongoose.Schema({

    _id: {
        type: mongoose.SchemaTypes.ObjectId
    },

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

module.exports.deleteEvent = function(toDelevent, callback) {
    event.findByIdAndRemove(toDelevent, callback);
}

module.exports.addEvent = function(newEvent, callback) {
    if (newEvent._id == null) {
        newEvent._id = new mongoose.mongo.ObjectID();
    }
    event.findByIdAndUpdate(newEvent._id, newEvent, { upsert: true, setDefaultsOnInsert: true, new: true, runValidators: true }, callback);
}