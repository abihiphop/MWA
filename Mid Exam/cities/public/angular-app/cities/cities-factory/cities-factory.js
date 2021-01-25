angular.module("CitiesApp").factory("CitiesFactory", CitiesFactory);
function CitiesFactory($http) {
  return {
    getAllCities: getAllCities,
    getOneCityDetail: getOneCityDetail,
    addCity:addCity,
    deleteCity:deleteCity,
    updateCity:updateCity,
  };
  function getAllCities() {
    return $http.get("/api/cities").then(complete).catch(failed);
  }

  function getOneCityDetail(id) {
    return $http
      .get("/api/cities/" + id)
      .then(complete)
      .catch(failed);
  }

  function addCity(city) {
    return $http
      .post("/api/cities",city)
      .then(complete)
      .catch(failed);
  }

  function deleteCity(cityID) {
    return $http
      .delete("/api/cities/"+cityID)
      .then(complete)
      .catch(failed);
  }

  function updateCity(cityID,City) {
    return $http
      .put("/api/cities/"+cityID,City)
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
