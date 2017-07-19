module.exports = function startChat(httpServer) {

    var io = require('socket.io').listen(httpServer);

    //Variables
    var SocketConnections = createArray(5, 3);

    // Socket io Signals

    //connection
    io.on('connection', function(socket) {

        //Admin created room.
        socket.on('admincreateroom', function(data) {

            for (var i = 0; i < SocketConnections.length; i++) {
                if (SocketConnections[i][0] == undefined || SocketConnections[i][2] == data.user) {

                    if (SocketConnections[i][2] == data.user) {
                        socket.emit('adminconn-response', {
                            message: 'success'
                        });
                        socket.join(SocketConnections[i][0]);
                    } else {
                        SocketConnections[i][0] = data.user;
                        SocketConnections[i][1] = true;
                        SocketConnections[i][2] = data.user;

                        socket.conn.admin = data.admin;

                        socket.join(data.user);
                        socket.emit('adminconn-response', {
                            message: 'success'
                        });
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

                    io.in(SocketConnections[i][0]).emit('userconn-response', {
                        message: data,
                        available: true,
                        room: roomid
                    });
                    socket.conn.admin = data.admin;
                    socket.conn.roomi = roomid;

                    SocketConnections[i][0] = roomid;
                    SocketConnections[i][1] = false;

                    socket.emit('userconn-response', {
                        message: data,
                        available: true,
                        room: roomid
                    });
                    return;
                }
            }
            socket.emit('userconn-response', {
                message: data,
                available: false
            });
        });

        //Admin leaves room
        socket.on('adminleaveroom', function(data) {
            var x = data.nickname;
            var y = false;

            io.in(data.room).emit('releasesocket', {
                room: data.room
            });

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

                    socket.to(data.room).emit('userleavedroom', {
                        room: data.room
                    });
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

        //Disconnect function to tidy up stuff after unexpected disconnect.
        socket.on('disconnecting', function(data) {

            var x = socket.conn.roomi;
            var y = false;


            if (socket.conn.admin) {
                io.in(x).emit('releasesocket', {
                    room: x
                });
                for (var k = 0; k < SocketConnections.length; k++) {
                    if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {
                        SocketConnections[k][0] = null;
                        SocketConnections[k][1] = null;
                        SocketConnections[k][2] = null;

                        break;
                    }
                }
            } else {
                for (var k = 0; k < SocketConnections.length; k++) {
                    if (SocketConnections[k][0] == x && SocketConnections[k][1] == y) {
                        SocketConnections[k][1] = true;
                        SocketConnections[k][0] = SocketConnections[k][2];
                        socket.to(x).emit('userleavedroom', {
                            room: x
                        });
                        break;
                    }
                }
            }
        });

        //Emits message !(to all on room)!
        socket.on('save-message', function(data) {
            io.emit('new-message', {
                message: data
            });
        });

        //Emits message about join !(to all on room)!
        socket.on('connectmessage', function(data) {
            socket.to(data).emit('connectinfo', {
                message: 'sukanugeets'
            });
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
}