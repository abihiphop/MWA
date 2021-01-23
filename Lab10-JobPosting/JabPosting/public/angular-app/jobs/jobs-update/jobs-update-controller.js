angular
  .module("JobsApp")
  .controller("JobUpdateController", JobUpdateController);

function JobUpdateController($routeParams, JobsFactory) {
  var JupdtCtrlr = this;
  var jobID = $routeParams.jobID;
  JupdtCtrlr.updateJob = function () {
    var Job = {
      title: JupdtCtrlr.title,
      salary: JupdtCtrlr.salary,
      experience: JupdtCtrlr.experience,
      postDate: JupdtCtrlr.postDate,
    };
    JobsFactory.updateJob(jobID, Job).then(function (response) {
        console.log("Controller reached");
      JupdtCtrlr.DeletedJobDetail = response;
    });
  };
}
