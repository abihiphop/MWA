angular.module("MyApp").controller("StoresController", StoresController);

/* 
// Without Store factory 

function StoresController($http){
    var This = this;
    $http.get("/api/games")
    .then(function( response){
            This.StoreContent = response.data;
    });

}

*/
function StoresController(StoreFactory) {
  var This = this;
  StoreFactory.getAllStores().then(function (response) {
    This.StoresContent = response;
  });
}
