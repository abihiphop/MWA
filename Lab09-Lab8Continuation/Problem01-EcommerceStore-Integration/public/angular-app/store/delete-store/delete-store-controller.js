angular
  .module("MyApp")
  .controller("DeleteStoreController", DeleteStoreController);

function DeleteStoreController($routeParams, StoreFactory) {
  var This = this;
  var id = $routeParams.storeID;
  StoreFactory.deleteStore(id).then(function (response) {
    This.DeletedContent = response;
  });
}
