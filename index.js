var server = require('./server');
var mongoose = require('mongoose');
var port = (process.env.PORT || 3000);

console.log("Starting API server...");
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    server.app.listen(port);
    console.log("Server ready!");
});