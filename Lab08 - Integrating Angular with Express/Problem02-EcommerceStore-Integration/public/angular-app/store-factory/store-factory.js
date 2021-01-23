
angular.module("MyApp").factory("StoreFactory", StoreFactory);

function StoreFactory($http) {
  return {
    getAllStores: getAllStores,
    getOneStore: getOneStore,
    getOneProduct:getOneProduct
  };
  function getAllStores() {
    return $http.get("/api/stores").then(complete).catch(failed); //Service that should be consumed
  }
  function getOneStore(id) {
    return $http.get("/api/stores/"+id).then(complete).catch(failed);
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
