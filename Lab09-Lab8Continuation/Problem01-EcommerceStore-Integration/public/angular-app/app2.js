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
        templateUrl:"angular-app/store/stores-list/stores.html",
        controller:"StoresController",
        controllerAs:"StoresCtrlr"
      })
      .when("/stores/add", { // Single Product
        templateUrl:"angular-app/store/add-stores/add-stores.html",
        controller:"AddStoreController",
        controllerAs:"AddStrCtrlr"
      })
      .when("/stores/delete/:storeID", { // Single Product
        templateUrl:"angular-app/store/stores-list/stores.html",
        controller:"DeleteStoreController",
        controllerAs:"DeleteStrCtrlr"
      })
      .when("/stores/:id", {
        templateUrl:"angular-app/store/single-store/store.html",
        controller:"SingleStoreController",
        controllerAs:"StoreCtrlr"
      })
      .when("/stores/:Storeid/products/:Productid", { // Single Product
        templateUrl:"angular-app/product/single-product/product.html",
        controller:"ProductController",
        controllerAs:"ProductCtrlr"
      })
    
    .otherwise({ redirectTo: "/" });
}
