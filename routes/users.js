const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        admin: false
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        admin: user.admin
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});


//Change password
router.post('/password', passport.authenticate('jwt', { session: false }), (req, res, err) => {
    User.changePassword(req.body.id, req.body.password, (err, res) => {
        if (err) throw err;
    });
    res.json('Salasana vaihdettu.');
});

//admin route
router.get('/admin', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.find({}, (err, user) => {
        if (err) throw err;
        return res.json(user);
    });
});

//user update (admin)
router.put('/update', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, callback => {
        res.send('Toimiiko?');
    });
});


//Change password
router.post('/password', passport.authenticate('jwt', { session: false }), (req, res, err) => {
    User.changePassword(req.body.id, req.body.password, (err, res) => {
        if (err) throw err;
    });
    res.json('Salasana vaihdettu.');
});

module.exports = router;
