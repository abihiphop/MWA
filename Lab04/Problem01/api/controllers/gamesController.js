const mongoose = require("mongoose");
const Games = mongoose.model("Game"); // Using the Schema we modeled in games-model
var offset = 0;
var count = 7;
module.exports.getAllGames = function (req, res) {
  // if(!req.query.offset){  // checking if user properly inputs offset or not
  //   res.status(400).json({"message":"You shoud set offset !"})
  //   return;
  // } 
  // if(!req.query.count){ // checking if user properly inputs offset or not
  //   res.status(400).json({"message":"You shoud set count !"})
  //   return;
  // }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  } 
  if(isNaN(offset)||isNaN(count)){ // checking for wrong offset and count input
    res.status(400).json({"message":"Query offset and count should be Numbers."})
    return;
  }

  Games.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, games) {
      const response = {
        status: 200,
        message: games
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!games) {
        response.status = 404;
        response.message = { message: "Sorry there are no games at the moment" };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneGame = function (req, res) {
  const gameID = req.params.gameID;
  Games.findById(gameID).exec(function (err, game) {
    const response = {
      status: 200,
      message: game
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    }
    if (!game) {
      response.status = 404;
      response.message = { message: "Sorry there is no game with the ID "+gameID };
    }
    res.status(response.status).json(response.message);
  });
};
