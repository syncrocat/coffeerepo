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
