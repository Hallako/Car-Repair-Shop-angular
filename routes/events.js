const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const event = require('../models/event');
const mongoose = require('mongoose');


//Add Post
router.post('/addevent', (req, res, next) => {

    let newEvent = new event({
        _id: req.body._id,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        rekisteriNro: req.body.rekisteriNro,
        backgroundColor: req.body.backgroundColor,
        description: req.body.description,
        confirm: false,
        user: req.body.user
    });

    event.addEvent(newEvent, (err, event) => {
        if (err) {
            res.json({ success: false, msg: err.errors.title.message });
        } else {
            res.json({ success: true, msg: 'Tapahtuman lisääminen onnistui' });
        }
    });
});

//delete event
router.delete('/deleteevent/:id', (req, res) => {
    event.deleteEvent(req.params.id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, msg: 'Removed succesfully' });
        }
    });
});


//get posts
router.get('/getevents/:start/:end?/:user?/:admin?', (req, res, next) => {
    if (req.params.admin == "true") {
        event.find({ start: { $gte: req.params.start, $lt: req.params.end } }, function(req, event) {
            res.json(event);
        });
    } else {
        var User = mongoose.mongo.ObjectID(req.params.user);
        event.find({
            start: { $gte: req.params.start, $lt: req.params.end },
            user: { $in: [User, null] }
        }, function(req, event) {
            res.json(event);
        });
    }
});

router.get('/getuserevents/:user/', (req, res, next) => {
    event.find({ user: req.params.user }, (err, event) => {
        if (err) throw err
        return res.json(event)
    })
})

router.get('/getconfirmevents/', (req, res, next) => {
    event.find({ confirm: false }, (err, event) => {
        if (err) throw err
        return res.json(event)
    })
})

router.post('/confirm/:id', (req, res) => {
    event.findById(req.params.id, (err, event) => {
        if (err) {
            res.json({ success: false, msg: err });
        }
        if (event) {
            event.confirm = true;
            event.save();
            res.json({ success: true, msg: 'Confirmed' });
        }
    });
});

module.exports = router;
