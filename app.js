const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
const mongoose = require('mongoose');
const http = require('http');
const favicon = require('serve-favicon');
const config = require('./config/database');
const users = require('./routes/users');
const events = require('./routes/events');
const chat = require('./routes/chat');

//Variables
var SocketConnections = createArray(5, 2);

//DB conf
mongoose.connect(config.database);

//Check connection
mongoose.connection.on('connected', () => {
    console.log('connected to DB');
});
mongoose.connection.on('error', (err) => {
    console.log('connected to DB' + err);
});

const app = express();
app.use(logger('dev'));

//port
const httpport = process.env.PORT || 8081;

//CORS Middleware
app.use(cors());

//Set Static foler
app.use(express.static(path.join(__dirname, 'public')));

//body parser midWare
app.use(bodyParser.json());

//passport midware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//routes
app.use('/chat', chat);
app.use('/users', users);
app.use('/events', events);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Start server
var httpServer = http.createServer(app);
httpServer.listen(httpport);

//Start Socket.io
var io = require('socket.io').listen(httpServer);

// socket io
io.on('connection', function(socket) {

    console.log('User connected');

    socket.on('createroom', function(data) {
        console.log(data)
        console.log('admin created room');

        for (var i = 0; i < SocketConnections.length; i++) {
            if (SocketConnections[i][0] == undefined) {
                SocketConnections[i][0] = socket.id;
                SocketConnections[i][1] = true;
                io.emit('userconn-response', { message: data, available: true, socketconnection: socket.id });
                break;
            }
        }

        console.log(SocketConnections);
    });

    socket.on('adminleaveroom', function(data) {
        var x = socket.id;
        var y = true;

        for (var k = 0; k < SocketConnections.length; k++) {
            if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {

                SocketConnections[k][0] = null;
                SocketConnections[k][1] = null;
            }
        }
        console.log(SocketConnections);
    });

    socket.on('userconnect', function(data) {
        console.log(data);

        for (var i = 0; i < SocketConnections.length; i++) {
            if (SocketConnections[i][1] == true) {
                io.emit('userconn-response', { message: data, available: true, socketconnection: socket.id });
                SocketConnections[i][1] = false;
                return;
            }
        }
        io.emit('userconn-response', { message: data, available: false });
    });

    socket.on('userdisconnect', function(data) {

        var x = socket.id;
        var y = true;

        for (var k = 0; k < SocketConnections.length; k++) {
            if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {
                SocketConnections[k][1] = true;
            }
        }
    });


    socket.on('disconnect', function(data) {

    });

    socket.on('save-message', function(data) {
        console.log(data);
        io.emit('new-message', { message: data });
    });
});

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}