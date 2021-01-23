angular
  .module("JobsApp")
  .controller("JobDetailController", JobDetailController);

function JobDetailController($routeParams, JobsFactory) {
 
  var This = this;
  var jobID = $routeParams.jobID;
  JobsFactory.getOneJobDetail(jobID).then(function (response) {
    This.OneJobDetail = response;
  });
}
