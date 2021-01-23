var express = require("express");
var router = express.Router();
var JobController = require("../controllers/JobController");
// var LocationController = require("../controllers/LocationController");
// var DescriptionController = require("../controllers/DescriptionController");
// var QualificationController = require("../controllers/QualificationController");

router.route("/jobs")
.get(JobController.getAllJobs);

router.route("/jobs")
.post(JobController.addJob);

router.route("/jobs/:jobID")
.get(JobController.getOneJob)
.put(JobController.editJob)
.delete(JobController.deleteJob);



module.exports = router;



