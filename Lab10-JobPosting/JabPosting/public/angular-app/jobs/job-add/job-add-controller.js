angular.module("JobsApp").controller("AddJobController", AddJobController);
function AddJobController(JobsFactory) {
  var This = this;
  This.addNewJob = function () {
    var Job = {
      title: This.title,
      companyName: This.companyName,
      salary: This.salary,

      country: This.country,
      state: This.state,
      city: This.city,
      zip: This.zip,

      jobType: This.jobType,

      summary: This.summary,
      benefits: This.benefits,
      skills: This.skills,

      experience: This.experience,
      knowledge: This.knowledge,
      education: This.education,
      language: This.language,

      postDate: This.postDate
    };
  
    JobsFactory.addJob(Job).then(function (response) {
      This.AddedJob = response;
    });
  };
}
