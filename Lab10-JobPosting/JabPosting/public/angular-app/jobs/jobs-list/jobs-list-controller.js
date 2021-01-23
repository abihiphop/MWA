angular.module("JobsApp").controller("JobsListController", JobsListController);

function JobsListController(JobsFactory) {
  var This = this;
   JobsFactory.getAllJobs().then(function (response) {
    This.JobsContent = response;
  });
}
