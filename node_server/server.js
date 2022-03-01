var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
//setting middleware
var ruta = __dirname + '/../www/';
var port = 7744;
app.use(express.static(ruta)); //Serves resources from public folder

console.log(ruta,port);
var server = app.listen(port);
