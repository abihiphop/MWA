angular.module("MyApp", ["ngRoute"]).config(config);

function config($routeProvider){ //,$locationProvier) {
  // $locationProvier.hashPrefix();
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
    .when("/games", {
        templateUrl:"angular-app/game-list/games.html",
        controller:"GamesController",
        controllerAs:"GamesCtrlr"
      })
      .when("/games/:id", {
        templateUrl:"angular-app/single-game/game.html",
        controller:"SingleGameController",
        controllerAs:"GameCtrlr"
      })
    .otherwise({ redirectTo: "/" });
}
