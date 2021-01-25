angular.module("CitiesApp").controller("AddCityController", AddCityController);
function AddCityController(CitiesFactory) {
  var This = this;
  This.addNewCity = function () {
    var City = {
      city: This.city,
      zip: This.zip,
      loc: This.loc,
      pop: This.pop,
      state: This.state,
    };

    CitiesFactory.addCity(City).then(function (response) {
      This.message ="";
      This.error ="";
      if (response && response.message === "success")
        This.message = "City Successfully Added";
      else This.error = "City could not be added, check your form";
    });
  };
}
