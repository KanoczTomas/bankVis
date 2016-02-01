var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var app = express();

app.use(morgan('dev'));
app.use(compress());
app.use('/', express.static(__dirname + '/static'));
app.listen(5000);
console.log('server started at *:5000');
