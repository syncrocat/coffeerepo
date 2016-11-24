var mongodb = require('mongodb');
var uri = 'mongodb://heroku_xl8h1k6v:atusortq4e2qku8pufc1cbeesb@ds163417.mlab.com:63417/heroku_xl8h1k6v';
ws.onmessage = function (event) {
  mongodb.MongoClient.connect(uri, function(err, db) {
    if(err) throw err;
    var times = db.collection('times');
    var data = { key: event.data };
    times.insert(data, function(err, result) {
      if(err) throw err;
      songs.drop(function(err) {
        if(err) throw err;
        db.close(function(err) {
          if(err) throw err;
        });
      });
    });
  });
};
