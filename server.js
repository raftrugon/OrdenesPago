var express = require('express');
var bodyParser = require('body-parser');
var DataStore = require('nedb');
var cors = require('cors');
var path = require('path');
var Contact = require('./contacts');

const CONTACTS_APP_DIR = "/dist/contacts-app";
var BASE_API_PATH = "/api/v1";
var filename = __dirname + "/contacts.json";

var contacts = [
    { "name": "juan", "phone": 5555 }
];

var db = new DataStore({
    filename: filename,
    autoload: true
});

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, CONTACTS_APP_DIR)));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, CONTACTS_APP_DIR, '/index.html'));
});






module.exports.app = app;
module.exports.db = db;