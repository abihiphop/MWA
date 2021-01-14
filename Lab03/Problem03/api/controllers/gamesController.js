const dbConnection = require("../data/dbconnection");

module.exports.getGames = function (req, res) {
  var offset = 0; 
  var count = 3;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }
  if (count > 7) {
    count = 7;
  }
  if(count<=0){
    count=3;
  }
  var db = dbConnection.getMyConnection();
  var collection = db.collection("games");
  collection
    .find()
    .skip(offset)
    .limit(count)
    .toArray(function (err, docs) {
      console.log("Found games", docs);
      res.status(200).json(docs);
    });
};
