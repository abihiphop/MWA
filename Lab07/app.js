angular.module("MyApp", ["ngRoute"]).config(config);

function config($routeProvider) { 
  $routeProvider
    .when("/", {
      templateUrl:"controller/home/home.html",
      controller:"HomeController",
      controllerAs:"HomeCtrlr"
    })
    .when("/about", {
      templateUrl:"controller/about/about.html",
      controller:"AboutController",
      controllerAs:"AboutCtrlr"
    })
    .when("/jokes", {
        templateUrl:"controller/joke/joke.html",
        controller:"JokeController",
        controllerAs:"JokeCtrlr"
      })
    .otherwise({ redirectTo: "/" });
}
