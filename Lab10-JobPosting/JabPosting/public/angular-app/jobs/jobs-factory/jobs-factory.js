angular.module("JobsApp").factory("JobsFactory", JobsFactory);
function JobsFactory($http) {
  return {
    getAllJobs: getAllJobs,
    getOneJobDetail: getOneJobDetail,
    addJob:addJob,
    deleteJob:deleteJob,
    updateJob:updateJob,
  };
  function getAllJobs() {
    return $http.get("/api/jobs").then(complete).catch(failed);
  }

  function getOneJobDetail(id) {
    return $http
      .get("/api/jobs/" + id)
      .then(complete)
      .catch(failed);
  }

  function addJob(job) {
    return $http
      .post("/api/jobs",job)
      .then(complete)
      .catch(failed);
  }

  function deleteJob(jobID) {
    return $http
      .delete("/api/jobs/"+jobID)
      .then(complete)
      .catch(failed);
  }

  function updateJob(jobID,Job) {
    return $http
      .put("/api/jobs/"+jobID,Job)
      .then(complete)
      .catch(failed);
  }

  function complete(response) {
    return response.data;
  }

  function failed(error) {
    return error.status.statusText;
  }
}
