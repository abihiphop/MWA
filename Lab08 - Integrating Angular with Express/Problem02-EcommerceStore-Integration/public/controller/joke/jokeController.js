
angular.module("MyApp").controller("JokeController", myJokeController); 

function myJokeController($http){
    var This = this;
    $http.get("https://official-joke-api.appspot.com/jokes/ten")
    .then(function( response){
            This.JokeContent = response.data;
    });

}
