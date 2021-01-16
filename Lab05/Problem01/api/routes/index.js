var express= require("express");
var router= express.Router();
var gamesController = require("../controllers/gamesController");
router.route("/games")
.get(gamesController.getAllGames)
.post(gamesController.addOneGame);

router.route("/games/:gameID")
.get(gamesController.getOneGame)
.put(gamesController.updateOneGame)
.delete(gamesController.deleteOneGame);

module.exports = router;
 