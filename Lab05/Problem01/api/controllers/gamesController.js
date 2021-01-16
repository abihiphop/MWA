const mongoose = require("mongoose");
const Games = mongoose.model("Game"); // Using the Schema we modeled in games-model
var offset = 0;
var count = 7;

module.exports.getAllGames = function (req, res) {
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }
  if (isNaN(offset) || isNaN(count)) {
    // checking for wrong offset and count input
    res
      .status(400)
      .json({ message: "Query offset and count should be Numbers." });
    return;
  }

  Games.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, games) {
      const response = {
        status: 200,
        message: games,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!games) {
        response.status = 404;
        response.message = {
          message: "Sorry there are no games at the moment",
        };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.addOneGame = function (req, res) {
  console.log("POST to add game");
  if (req.body && req.body.title && req.body.price) {
    Games.create(
      {
        title: req.body.title,
        year: req.body.year,
        rate: req.body.rate,
        price: req.body.price,
        minPlayers: req.body.minPlayers,
        maxPlayers: req.body.maxPlayers,
        publisher: "",
        reviews: "",
        minAge: req.body.minAge,
        designers: req.body.designers,
      },
      function (err, games) {
        const response = {
          status: 201,
          message: games,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        if (!games) {
          response.status = 404;
          response.message = {
            message: "Sorry there are no games at the moment",
          };
        }
        res.status(response.status).json(response.message);
      }
    );
  } else {
    console.log("Data is missing from POST body");
    res.status(400).json({ error: "Data is missing from POST body" });
  }
};

module.exports.getOneGame = function (req, res) {
  const gameID = req.params.gameID;
  Games.findById(gameID).exec(function (err, game) {
    const response = {
      status: 200,
      message: game,
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    }
    if (!game) {
      response.status = 404;
      response.message = {
        message: "Sorry there is no game with the ID " + gameID,
      };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.updateOneGame = function (req, res) {
  const gameID = req.params.gameID;
  Games.findById(gameID)
    .select("-reviews -publisher")
    .exec(function (err, game) {
      const response = {
        status: 204,
        message: game,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      } else if (!game) {
        response.status = 404;
        response.message = {
          message: "Sorry there is no game with the ID " + gameID,
        };
      } else if (response.status !== 204) {
        res.status(response.status).json(response.message);
      } else {
        game.title = req.body.title;
        game.year = parseInt(req.body.year);
        game.rate = parseInt(req.body.rate);
        game.price = parseFloat(req.body.price);
        game.minPlayers = parseInt(req.body.minPlayers);
        game.maxPlayers = parseInt(req.body.maxPlayers);
        game.minAge = parseInt(req.body.minAge);
        game.designers = req.body.designers;
        game.save(function (err, updatedGame) {
          response.message = updatedGame;
          if (err) {
            response.status = 500;
            response.messge = err;
          }
          res.status(response.status).json(response.message);
        });
      }
    });
};

module.exports.deleteOneGame = function (req, res) {
  const gameID = req.params.gameID;
  Games.findByIdAndRemove(gameID).exec(function (err, game) {
    const response = {
      status: 204,
      message: game,
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    } else if (!game) {
      response.status = 404;
      response.message = {
        message: "Sorry there is no game with the ID " + gameID,
      };
    }
    res.status(response.status).json(response.message);
  });
};
