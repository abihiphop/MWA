angular
  .module("CitiesApp")
  .controller("CityUpdateController", CityUpdateController);

function CityUpdateController($routeParams, CitiesFactory) {
  var This = this;
  var cityID = $routeParams.cityID;
  This.updateCity = function () {
    var City = {
      city: This.city,
      zip: This.zip,
      loc: This.loc,
      pop: This.pop,
      state: This.state,
    };
    CitiesFactory.updateCity(cityID, City).then(function (response) {
      This.UpdatedCityDetail = response;
      This.message ="";
      This.error ="";
       if (response && response.message === "success")
        This.message = "Successfully Registered !";
      else
        This.error =
          "Did not registered, Please check your form requirement";
    });
  };
}
