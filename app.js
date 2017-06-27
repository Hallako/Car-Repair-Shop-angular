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
var SocketConnections = createArray(5, 3);

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

// Socket io Signals
io.on('connection', function(socket) {

    //Admin created room.
    socket.on('admincreateroom', function(data) {

        for (var i = 0; i < SocketConnections.length; i++) {
            if (SocketConnections[i][0] == undefined || SocketConnections[i][2] == data.user) {

                if (SocketConnections[i][2] == data.user) {
                    socket.emit('adminconn-response', { message: 'success' });
                    socket.join(SocketConnections[i][0]);
                } else {
                    SocketConnections[i][0] = data.user;
                    SocketConnections[i][1] = true;
                    SocketConnections[i][2] = data.user;

                    socket.conn.admin = data.admin;

                    socket.join(data.user);
                    socket.emit('adminconn-response', { message: 'success' });
                }
                break;
            }
        }
    });

    //User joins room.
    socket.on('userjoin', function(data) {

        for (var i = 0; i < SocketConnections.length; i++) {
            if (SocketConnections[i][1] == true) {

                var roomid = data.user + SocketConnections[i][0];
                socket.join(roomid);

                io.in(SocketConnections[i][0]).emit('userconn-response', { message: data, available: true, room: roomid });
                socket.conn.admin = data.admin;
                socket.conn.roomi = roomid;

                SocketConnections[i][0] = roomid;
                SocketConnections[i][1] = false;
                socket.emit('userconn-response', { message: data, available: true, room: roomid });
                return;
            }
        }
        socket.emit('userconn-response', { message: data, available: false });
    });

    //Admin leaves room
    socket.on('adminleaveroom', function(data) {
        var x = data.nickname;
        var y = false;

        io.in(data.room).emit('releasesocket', { room: data.room });

        for (var k = 0; k < SocketConnections.length; k++) {
            if (SocketConnections[k][2] == x) {
                SocketConnections[k][0] = null;
                SocketConnections[k][1] = null;
                SocketConnections[k][2] = null;

                socket.leave(data.room);
                break;
            }
        }
    });

    //User disconnects manually
    socket.on('userdisconnect', function(data) {
        var x = data.room;
        var y = false;

        for (var k = 0; k < SocketConnections.length; k++) {
            if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {
                SocketConnections[k][1] = true;
                SocketConnections[k][0] = SocketConnections[k][2];

                socket.to(data.room).emit('userleavedroom', { room: data.room });
                socket.leave(data.room);
                break;
            }
        }
    });

    //Callback to join admin to correct room.
    socket.on('adminjoin', function(data) {
        socket.join(data);
        socket.conn.roomi = data;
    });


    /* socket.on('disconnecting', function(data) {
         console.log(socket.conn.admin = data.admin)
         socket.emit('disconnected')
     });*/

    //Disconnect function to tidy up stuff after unexpected disconnect.
    socket.on('disconnecting', function(data) {

        var x = socket.conn.roomi;
        var y = false;

        console.log(socket.conn.admin + " " + x)
        if (socket.conn.admin) {
            io.in(x).emit('releasesocket', { room: x });
            for (var k = 0; k < SocketConnections.length; k++) {
                if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {
                    SocketConnections[k][0] = null;
                    SocketConnections[k][1] = null;
                    SocketConnections[k][2] = null;
                    console.log('Admin left')
                    break;
                }
            }
        } else {
            for (var k = 0; k < SocketConnections.length; k++) {
                if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {
                    SocketConnections[k][1] = true;
                    SocketConnections[k][0] = SocketConnections[k][2];
                    socket.to(x).emit('userleavedroom', { room: x });

                    console.log('user left')
                    break;
                }
            }
        }
    });

    //Emits message !(to all on room)!
    socket.on('save-message', function(data) {
        io.emit('new-message', { message: data });
    });

    //######## SOCKETS END ###########
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