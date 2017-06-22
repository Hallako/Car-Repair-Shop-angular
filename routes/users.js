const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        area: req.body.area,
        city: req.body.city,
        username: req.body.username,
        password: req.body.password,
        admin: false
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Rekisteröityminen epäonnistui' });
        } else {
            res.json({ success: true, msg: 'Rekisteröityminen onnistui!' });
        }
    });
});

//Checks if username exists
router.post('/checkname', (req, res) => {
    User.checkUsername(req.body.username, (err, user) => {
        if (user == 0) {
            res.json({
                exists: false
            });

        } else {
            res.json({
                exists: true
            });
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
            return res.json({
                success: false,
                msg: 'User not found'
            });
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
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        email: user.email,
                        admin: user.admin
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    res.json({
        user: req.user
    });
});

//Returns user object bt passed id
router.post('/getuserbyid', (req, res) => {
    User.getUserById(req.body.user, (err, response) => {
        res.json(response);
    });
});


//Change password
router.post('/password', passport.authenticate('jwt', {
    session: false
}), (req, res, err) => {
    User.changePassword(req.body.id, req.body.password, (err, res) => {
        if (err) throw err;
    });
    res.json('Salasana vaihdettu.');
});

//admin route(returns all users)
router.get('/admin', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    User.find({}, (err, user) => {
        if (err) throw err;
        return res.json(user);
    });
});

//search router
router.get('/search/:term?', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    var param = new RegExp(req.params.term, "i");
    User.find({
        $or: [{
                'lastname': param
            },
            {
                'firstname': param
            }
        ]
    }, function(err, user) {
        if (err) throw err;
        return res.json(user)
    });
});

//user update (admin)
router.put('/update', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, callback => {
        res.json('Käyttäjä päivitetty');
    });
});


//Change password
router.post('/password', passport.authenticate('jwt', {
    session: false
}), (req, res, err) => {
    User.changePassword(req.body.id, req.body.password, (err, res) => {
        if (err) throw err;
    });
    res.json('Salasana vaihdettu.');
});

module.exports = router;