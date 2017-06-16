var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Chat = require('../models/Chat.js');

/* GET ALL CHATS */
router.get('/:room', function(req, res, next) {
    Chat.find({ room: req.params.room }, function(err, chats) {
        if (err) return next(err);
        res.json(chats);
    });
});

/* SAVE CHAT */
router.post('/', function(req, res, next) {
    Chat.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;