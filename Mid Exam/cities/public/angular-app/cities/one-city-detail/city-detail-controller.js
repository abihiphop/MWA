angular
  .module("CitiesApp")
  .controller("CityDetailController", CityDetailController);

function CityDetailController($routeParams, CitiesFactory) {
 
  var This = this;
  var cityID = $routeParams.cityID;
  CitiesFactory.getOneCityDetail(cityID).then(function (response) {
    This.OneCityDetail = response;
  });
}
