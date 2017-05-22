const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const events = require('./routes/events');
var http = require('http');
var https = require('https');
var fs = require('fs');

var privateKey = fs.readFileSync('./sslcert/private.key', 'utf8');
var certificate = fs.readFileSync('./sslcert/certificate.pem', 'utf8');
var credentials = {
    key: privateKey,
    cert: certificate,
    passphrase: "xrikal"
};

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

//port
const port = process.env.PORT || 3000;

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
app.use('/users', users);
app.use('/events', events);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(8082);