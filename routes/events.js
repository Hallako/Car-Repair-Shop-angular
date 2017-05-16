const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const event = require('../models/event');

//Add Post 
router.post('/addevent', (req, res, next) => {

    let newEvent = new event({
        title: req.body.title,
        start: req.body.start,
        carplate: req.body.carplate,
        description: req.body.description,
        user: req.body.user
    });

    event.addEvent(newEvent, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add event' });
        } else {
            res.json({ success: true, msg: 'Event added' });
        }
    });
});

//get posts

router.get('/getevents', (req, res, next) => {
    event.find({}, function(req, event) {
        res.json(event);
    });
});

module.exports = router;