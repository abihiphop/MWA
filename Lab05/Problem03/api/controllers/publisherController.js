const mongoose = require("mongoose");
const Games = mongoose.model("Game"); // Using the Schema we modeled in games-model

module.exports.getPublisher = function (req, res) {
  const gameID = req.params.gameID;
  Games.findById(gameID)
    .select("publisher")
    .exec(function (err, myPublisher) {
      const response = {
        status: 200,
        message: "",
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!myPublisher) {
        response.status = 404;
        response.message = {
          message: "Sorry there is no publisher for this game",
        };
      }
      if (myPublisher) response.message = myPublisher;
      res.status(response.status).json(response.message);
    });
};

module.exports.addPublisher = function (req, res) {
  const gameID = req.params.gameID;
  console.log("POST to add publisher");
  if (req.body && req.body.name && req.body.country) {
    var coordArrays = req.body.location.split(/,/);
    var coordinate = { coordinates: [parseInt(coordArrays[0]), parseInt(coordArrays[1])] };
    Games.update(
      { _id: gameID },      
        {
        $set:{
          publisher: {
            name: req.body.name,
            country: req.body.country,
            established: Date(req.body.established),
           location: coordinate,
          },   
        },    
    },
      function (err, pub) {
        const response = {
          status: 201,
          message: pub,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        res.status(response.status).json(response.message);
      }
    );
  } else {
    console.log("There is no data to be inserted");
    res.status(400).json({ error: "There is no data to be inserted" });
  }
};

module.exports.updatePublisher = function (req, res) {
    const gameID = req.params.gameID;
  console.log("POST to update publisher");
  if (req.body && req.body.name && req.body.country) {
    var coordArrays = req.body.location.split(/,/);
    var coordinate = { coordinates: [parseInt(coordArrays[0]), parseInt(coordArrays[1])] };
    Games.update(
      { _id: gameID },      
        {
        $set:{
          publisher: {
            name: req.body.name,
            country: req.body.country,
            established: Date(req.body.established),
           location: coordinate,
          },   
        },    
    },
      function (err, pub) {
        const response = {
          status: 204,
          message: pub,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        res.status(response.status).json(response.message);
      }
    );
  } else {
    console.log("There is no such publisher to be updated");
    res.status(400).json({ error: "There is no such publisher to be updated" });
  }
};

module.exports.deletePublisher = function (req, res) {
  const gameID = req.params.gameID;
  console.log("POST to delete publisher");
  Games.update(
    { _id: gameID },
    { $unset: { publisher: 1 } },
    function (err, pub) {
      const response = {
        status: 204,
        message: pub,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!pub) {
        console.log("There is no publisher to be deleted");
        res.status(400).json({ error: "There is no publisher to be deleted" });
      }
      res.status(response.status).json(response.message);
    }
  );
};
