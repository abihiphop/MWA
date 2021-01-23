angular.module("JobsApp", ["ngRoute"]).config(config);
function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/welcome/welcome.html",
      //controller:"WelcomeController",
      //controllerAs:"WlcmCtrlr"
    })
    .when("/jobs", {
      templateUrl: "angular-app/jobs/jobs-list/jobs-list.html",
      controller: "JobsListController",
      controllerAs: "JLCtrlr",
    })
    .when("/jobs/add", {
        templateUrl: "angular-app/jobs/job-add/job-add.html",
        controller: "AddJobController",
        controllerAs: "This",
      })
      
    .when("/jobs/:jobID", {
      templateUrl: "angular-app/jobs/one-job-detail/one-job-detail.html",
      controller: "JobDetailController",
      controllerAs: "JdtlCtrlr",
    })
    .when("/jobs/:jobID/delete", {
        templateUrl: "angular-app/jobs/job-delete/job-delete.html",
        controller: "JobDeleteController",
        controllerAs: "JdltCtrlr",
      })
    //   .when("/jobs/:jobID/update", {
    //     templateUrl: "angular-app/jobs/jobs-update/jobs-update.html",
    //     controller: "JobUpdateController",
    //     controllerAs: "JupdtCtrlr",
    //   })
   
      
    .otherwise({redirectTo: '/'});
}
