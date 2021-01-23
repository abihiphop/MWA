
angular.module("MyApp").controller("SingleGameController", SingleGameController); 

function SingleGameController($routeParams, GameFactory){
    var This = this;
    var id = $routeParams.id;
    GameFactory.getOneGame(id).then(function(response){
        This.SingleGameContent = response;
    });

}
