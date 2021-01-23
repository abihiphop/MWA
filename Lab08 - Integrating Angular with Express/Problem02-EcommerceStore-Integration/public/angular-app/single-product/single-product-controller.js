angular.module("MyApp").controller("ProductController", ProductController);

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
function ProductController($routeParams, StoreFactory) {
  var This = this;
  var storeID= $routeParams.Storeid;
  var  prodID = $routeParams.Productid;
  StoreFactory.getOneProduct(storeID,prodID).then(function (response) {
    This.ProductContent = response;
  });
}
