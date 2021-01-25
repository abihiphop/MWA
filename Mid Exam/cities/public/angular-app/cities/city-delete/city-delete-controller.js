angular
  .module("CitiesApp")
  .controller("CityDeleteController", CityDeleteController);

function CityDeleteController($routeParams, CitiesFactory) {
  var This = this;
  var cityID = $routeParams.cityID;
  CitiesFactory.deleteCity(cityID).then(function (response) {
    This.DeletedCityDetail = response;
   });
}
