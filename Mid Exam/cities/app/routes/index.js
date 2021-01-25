var express = require("express");
var router = express.Router();
var CitiesController = require("../controllers/CitiesController");
 
router.route("/cities")
.get(CitiesController.getAllCities);

router.route("/cities")
.post(CitiesController.addCity);

router.route("/cities/:cityID")
.get(CitiesController.getOneCity)
.put(CitiesController.editCity)
.delete(CitiesController.deleteCity);

module.exports = router;



