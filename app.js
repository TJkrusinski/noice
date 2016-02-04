'use strict';

var express = require('express');
var child = require('child_process');

var app = express();






//// the command!

var ps = 'say noice';





//// down here we are going call stuff!

app.use(function(req, res, next){
  noice();
  next();
});





//// we gotta serve them files

app.use(express.static('./p'));





//// a port, if you will

app.listen(3000);





//// and the best part of it all, noice!

function noice () {
  child.exec('say noice', function(err){ });
};
