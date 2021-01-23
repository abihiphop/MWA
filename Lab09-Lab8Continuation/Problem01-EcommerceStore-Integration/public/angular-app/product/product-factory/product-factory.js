
angular.module("MyApp").factory("ProductFactory", ProductFactory);

function ProductFactory($http) {
  return {
    getAllProducts: getAllProducts,
    getOneProduct:getOneProduct
  };

  function getAllProducts(StoreId) {
    return $http.get("/api/stores/"+StoreId+"/products").then(complete).catch(failed); 
  }
  
  function getOneProduct(StoreId,ProductID) {
    return $http.get("/api/stores/"+StoreId+"/products/"+ProductID).then(complete).catch(failed); 
  }
  
  function complete(response) {
    return response.data;
  }

  function failed(error) {
    return error.status.statusText;
  }
}
