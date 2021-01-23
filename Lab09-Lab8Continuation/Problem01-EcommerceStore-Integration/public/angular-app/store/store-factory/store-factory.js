angular.module("MyApp").factory("StoreFactory", StoreFactory);

function StoreFactory($http) {
  return {
    getAllStores: getAllStores,
    getOneStore: getOneStore,
    addStore:addStore,
    deleteStore:deleteStore
  };
  function getAllStores() {
    return $http.get("/api/stores").then(complete).catch(failed); //Service that should be consumed
  }
  function getOneStore(id) {
    return $http
      .get("/api/stores/" + id)
      .then(complete)
      .catch(failed);
  }
  function addStore(store) {
    return $http
      .post("/api/stores", store)
      .then(complete)
      .catch(failed);
  }

  function deleteStore(storeID) {
    return $http
      .delete("/api/stores/"+storeID)
      .then(complete)
      .catch(failed);
  }

  function complete(response) {
    return response.data;
  }

  function failed(error) {
    return error.status.statusText;
  }
}
