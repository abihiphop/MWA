angular.module("MyApp").controller("ProductController", ProductController);


function ProductController($routeParams, ProductFactory) {
  var This = this;
  var storeID= $routeParams.Storeid;
  var  prodID = $routeParams.Productid;
  ProductFactory.getOneProduct(storeID,prodID).then(function (response) {
    This.ProductContent = response;
  });
}
