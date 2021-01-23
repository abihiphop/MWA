angular.module("MyApp").controller("GamesController", GamesController);

/* 
// Without Game factory 

function GamesController($http){
    var This = this;
    $http.get("/api/games")
    .then(function( response){
            This.GameContent = response.data;
    });

}

*/
function GamesController(GameFactory) {
  var This = this;
  GameFactory.getAllGames().then(function (response) {
    This.GameContent = response;
  });
}
