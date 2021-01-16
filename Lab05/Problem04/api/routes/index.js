var express= require("express");
var router= express.Router();

var studentsController = require("../controllers/studentsController");
var addressController = require("../controllers/addressController");

router.route("/students")
.get(studentsController.getAllStudents)
.post(studentsController.addOneStudent);

router.route("/students/:studentID")
.get(studentsController.getOneStudent)
.put(studentsController.updateOneStudent)
.delete(studentsController.deleteOneStudent);

router.route("/students/:studentID/address")
.get(addressController.getAllAddressOfOneStudent)
.post(addressController.addOneAddressOfOneStudent);
 

router.route("/students/:studentID/address/:addressID")
.get(addressController.getOneAddressOfOneStudent)
.put(addressController.updateOneAddressOfOneStudent)
.delete(addressController.deleteOneAddressOfOneStudent);

module.exports = router;
 