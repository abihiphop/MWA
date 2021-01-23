angular.module("MyApp").controller("AddStoreController", AddStoreController);

function AddStoreController(StoreFactory) {
  var This = this;
  This.myaddstore = function () {
    var store = {
      storeName: This.storeName,
      
      country: This.country,
      state: This.state,
      city: This.city,
      zip: parseInt(This.zip),
      street: This.street,
      email: This.email,
      contactPerson: This.contactPerson,

      productName: This.productName,
      productDescription: This.productDescription,
      productTag: This.productTag,
      productPrice: This.productPrice,
      currency: This.currency,
    };

    StoreFactory.addStore(store).then(function (response) {
      This.AddedStoreMessage = response;
    });
  };
}
