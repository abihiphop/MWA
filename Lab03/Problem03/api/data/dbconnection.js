var MongoClient = require("mongodb").MongoClient;
var dbName = "gamesDB";
var dburl = "mongodb://localhost:27017/" + dbName;
var _connection = null;
var open = function () {
  MongoClient.connect(
    dburl,
    { useUnifiedTopology: true },
    function (err, client) {
      if (err) {
        console.log("DB connection failed");
        return;
      }
      _connection = client.db();
      console.log("My DB connection is openned", _connection);
    }
  );
};
var get = function () {
  return _connection;
};
module.exports = {
  openConnection: open,
  getMyConnection: get,
};
