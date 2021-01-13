var express= require("express");
var router= express.Router();
var additionController = require("../controllers/additionController.js");
router.route("/add/:firstNumber").get(additionController.getSummation);
module.exports = router;
 