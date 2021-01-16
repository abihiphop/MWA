const mongoose = require("mongoose");
const Games = mongoose.model("Game"); // Using the Schema we modeled in games-model

module.exports.getReviews = function (req, res) {
  const gameID = req.params.gameID;
  Games.findById(gameID)
    .select("reviews")
    .exec(function (err, allreviews) {
      const response = {
        status: 200,
        message: "",
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!allreviews) {
        response.status = 404;
        response.message = {
          message: "Sorry there is no publisher for this game",
        };
      }
      if (allreviews) response.message = allreviews;
      res.status(response.status).json(response.message);
    });
};

module.exports.addReviews = function (req, res) {
  const gameID = req.params.gameID;
  console.log("POST to add reviews");
  if (req.body && req.body.reviews) {
    const reviewArrays = req.body.reviews.split(/,/);
    Games.update(
      { _id: gameID },
      {
        $push: { reviews: reviewArrays },
      },
      function (err, review) {
        const response = {
          status: 201,
          message: review,
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
    console.log("There is no data to be inserted.");
    res.status(400).json({ error: "There is no data to be inserted." });
  }
};

module.exports.updateReviews = function (req, res) {
  const gameID = req.params.gameID;
  console.log("POST to update reviews");
  if (req.body && req.body.reviews) {
    const reviewArrays = req.body.reviews.split(/,/).map(Number);
    Games.update(
      { _id: gameID },
      { $set: { "reviews.$[r]": reviewArrays[1] } },
      { arrayFilters: [{ "r": { $eq: reviewArrays[0] } }], multi: true },
      function (err, rev) {
        const response = {
          status: 204,
          message: rev,
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

module.exports.deleteAllReviews = function (req, res) {
  const gameID = req.params.gameID;
  console.log("POST to delete publisher");
  Games.update(
    { _id: gameID },
    { $unset: { reviews: 1 } },
    function (err, rev) {
      const response = {
        status: 204,
        message: rev,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!rev) {
        console.log("There is no publisher to be deleted");
        res.status(400).json({ error: "There is no publisher to be deleted" });
      }
      res.status(response.status).json(response.message);
    }
  );
};
