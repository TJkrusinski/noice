'use strict';

var express = require('express');
var child = require('child_process');

var app = express();





//// the player!

var player = process.platform === 'darwin' ? 'afplay' : 'omxplayer';





//// down here we are going call stuff!

app.use(function(req, res, next){
  noice(req.query.track);
  next();
});





//// we gotta serve them files

app.use(express.static('./p'));




//// a port, if you will

app.listen(3000);





//// and the best part of it all, noice!

function noice (track) {
  console.log(track);
  if (!track) return;

  var ps = [player];

  ps.push(['p/', track, '.mp3'].join(''));

  ps = ps.join(' ');

  console.log(ps);

  child.exec(ps, function(err){ });
};
