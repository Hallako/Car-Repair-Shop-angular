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
const chatroutes = require('./routes/chat');
const chatconf = require('./config/chat')


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
app.use('/chat', chatroutes);
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

//Start Chat
chatconf(httpServer);