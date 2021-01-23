angular
  .module("JobsApp")
  .controller("JobDeleteController", JobDeleteController);

function JobDeleteController($routeParams, JobsFactory) {
  var JdltCtrlr = this;
  var jobID = $routeParams.jobID;
  JobsFactory.deleteJob(jobID).then(function (response) {
    JdltCtrlr.DeletedJobDetail = response;
    console.log("Content "+JdltCtrlr.DeletedJobDetail);
  });
}
