angular.module("MyApp", ["ngRoute"]).config(config);

function config($routeProvider){ //,$locationProvier) {
  // $locationProvier.hashPrefix();
  $routeProvider
    .when("/", {
      templateUrl:"controller/home/home.html",
      controller:"HomeController",
      controllerAs:"HomeCtrlr"
    })
    .when("/about", {
      templateUrl:"controller/about/about.html",
      controller:"AboutController",
      controllerAs:"AboutCtrlr"
    })
    .when("/stores", {
        templateUrl:"angular-app/stores-list/stores.html",
        controller:"StoresController",
        controllerAs:"StoresCtrlr"
      })
      .when("/stores/:id", {
        templateUrl:"angular-app/single-store/store.html",
        controller:"SingleStoreController",
        controllerAs:"StoreCtrlr"
      })
      .when("/stores/:Storeid/products/:Productid", {
        templateUrl:"angular-app/single-product/product.html",
        controller:"ProductController",
        controllerAs:"ProductCtrlr"
      })
    .otherwise({ redirectTo: "/" });
}
