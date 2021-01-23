angular.module("MyApp").controller("GamesAddController", GamesAddController);

function GamesAddController(GameFactory) {
  var gameVar = this;
  gameVar.addGame = function(){
      console.log("Testing .... In Add Game");
       GameFactory.getAllGames().then(function (response) {
    This.GameAddContent = response;
  });
  }
 
}
