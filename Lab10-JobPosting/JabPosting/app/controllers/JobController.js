const mongoose = require("mongoose");
const Jobs = mongoose.model("Jobs");

module.exports.getAllJobs = function (req, res) {
  var offset = 0;
  var count = 10;
  Jobs.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, jobs) {
      const response = {
        status: 200,
        message: "",
      };
      if (err) {
        response.status = 500;
        response.message = err;
      } else if (!jobs) {
        response.status = 404;
        response.message = { message: "Sorry There are no Jobs" };
      } else {
        response.message = jobs;
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneJob = function (req, res) {
    console.log("Called");
  var jobID = req.params.jobID;
  Jobs.findById(jobID).exec(function (err, job) {
    const response = {
      status: 200,
      message: "",
    };
    if (err) {
      response.status = 500;
      response.message = err;
    } else if (!job) {
      response.status = 404;
      response.message = {
        message: "Sorry There is no Job for the id " + jobID,
      };
    } else {
      response.message = job;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.addJob = function (req, res) {
   Jobs.create(
    {
      title: req.body.title,
      companyName: req.body.companyName,
      salary: parseFloat(req.body.salary),
      location: {
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        zip: parseInt(req.body.zip),
      },
      jobType: req.body.jobType,
      description: {
        summary: req.body.summary,
        benefits: [req.body.benefits],

        skills: [req.body.skills],
      },

      qualification: {
        experience: parseInt(req.body.experience),
        knowledge: req.body.knowledge,
        education: req.body.education,
        language: req.body.language,
      },
      postDate: Date(req.body.postDate),
    },
    function (err, createdJob) {
       const response = {
        status: 200,
        message: "",
      };
      if (err) {
        response.status = 500;
        response.message = err;
      } else if (!createdJob) {
        response.status = 404;
        response.message = {
            'message': "Sorry job could not be inserted ",
        };
      } else {
        response.message = {'message': "Job successfully inserted"}; 
      }
      res.status(response.status).json(response.message);
    }
  );
};

module.exports.deleteJob = function (req, res) { 
    var jobID = req.params.jobID;
    Jobs.findByIdAndRemove(jobID).exec(function(err,deletedJob){
        const response = {
            status: 202,
            message: "",
          };
          if (err) {
            response.status = 500;
            response.message = err;
          } else if (!deletedJob) {
            response.status = 404;
            response.message = {
              message: "Sorry job could not be deleted ",
            };
          } else {
            response.message = {message: "Job successfully deleted"}; 
          }
          console.log("Deleting reached");
          res.status(response.status).json(response.message);
    });
}

module.exports.editJob = function (req, res) { 
    var jobID = req.params.jobID;
    Jobs.findById(jobID).exec(function(err,job){
        const response = {
            status: 202,
            message: "",
          };
          if (err) {
            response.status = 500;
            response.message = err;
          } else if (!job) {
            response.status = 404;
            response.message = {
              message: "Sorry there is no such job ",
            };
          } else {
            job.title= req.body.title;
            job.salary= parseFloat(req.body.salary);
            job.qualification.experience= req.body.experience;          
            job.postDate= Date(req.body.postDate);
            job.save(function(err,savedJob){
                if (err) {
                    response.status = 500;
                    response.message = err;
                  } else if (!savedJob) {
                    response.status = 404;
                    response.message = {
                      message: "Sorry job could not be edited ",
                    };
                  }
                  else{
                    response.message = {message: "Job successfully deleted"}; 
                  }
            });             
          }
          res.status(response.status).json(response.message);
    });
}

