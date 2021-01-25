angular
  .module("CitiesApp")
  .controller("CitiesListController", CitiesListController);

function CitiesListController(CitiesFactory) {
  var This = this;

  This.limit = 10;
  //   $scope.items = Array.from(Array(1000).keys());


  CitiesFactory.getAllCities().then(function (response) {
    This.CitiesContent = response;
  });


  This.loadMore = function (last, inview) {
    if (last && inview) {
      This.limit += 10;
    }
  };

}
