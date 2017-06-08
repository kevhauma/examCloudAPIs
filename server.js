var express = require('express');
var bodyparser = require('body-parser');
var http = require('http');
var request = require('request');
var app = express();

// Static file hosting
app.use(express.static('client'));

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000);
