'use strict';

var express = require('express');

var app = express();

app.use('/components/gh-issues', express.static( __dirname));
app.use('/components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.redirect('/components/gh-issues/');
});

app.get('/hello', function (req, res) {
  res.status(200).send('Hello, world!');
});

var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
});
