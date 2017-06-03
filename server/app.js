var express = require("express");
var path = require("path");

var port =   '7271';
var app = express();
var http = require('http').createServer(app);
console.log('here');
var bodyParser      = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/client', express.static(path.join(__dirname, '../client')))

require('./route')(app);


http.listen(port ,function(){
    console.log('Starting Web Server on Port   ' + port );
});
