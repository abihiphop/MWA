var express= require("express");
var router= express.Router();
var gamesController = require("../controllers/gamesController");
router.route("/games").get(gamesController.getAllGames);
router.route("/games/:gameID").get(gamesController.getOneGame);

module.exports = router;
 