angular.module("CitiesApp", ["ngRoute",'angular-inview']).config(config);
function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angular-app/welcome/welcome.html",
      //controller:"WelcomeController",
      //controllerAs:"WlcmCtrlr"
    })
    .when("/cities", {
      templateUrl: "angular-app/cities/cities-list/cities-list.html",
      controller: "CitiesListController",
      controllerAs: "This",
    })
    .when("/cities/add", {
        templateUrl: "angular-app/cities/city-add/city-add.html",
        controller: "AddCityController",
        controllerAs: "This",
      })
      
    .when("/cities/:cityID", {
      templateUrl: "angular-app/cities/one-city-detail/one-city-detail.html",
      controller: "CityDetailController",
      controllerAs: "This",
    })
    .when("/cities/:cityID/delete", {
        templateUrl: "angular-app/cities/city-delete/city-delete.html",
        controller: "CityDeleteController",
        controllerAs: "This",
      })
      .when("/cities/:cityID/update", {
        templateUrl: "angular-app/cities/cities-update/cities-update.html",
        controller: "CityUpdateController",
        controllerAs: "This",
      })
      
    .otherwise({redirectTo: '/'});
}
