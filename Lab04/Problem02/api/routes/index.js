var express= require("express");
var router= express.Router();

var studentsController = require("../controllers/studentsController");
var addressController = require("../controllers/addressController");

router.route("/students").get(studentsController.getAllStudents);
router.route("/students/:studentID").get(studentsController.getOneStudent);
router.route("/students/:studentID/address").get(addressController.getAllAddressOfOneStudent);
router.route("/students/:studentID/address/:addressID").get(addressController.getOneAddressOfOneStudent);

module.exports = router;
 