angular
  .module("MyApp")
  .controller("SingleStoreController", SingleStoreController);

function SingleStoreController($routeParams, StoreFactory) {
  var This = this;
  var id = $routeParams.id;
  StoreFactory.getOneStore(id).then(function (response) {
    This.StoreContent = response;
  });
}
