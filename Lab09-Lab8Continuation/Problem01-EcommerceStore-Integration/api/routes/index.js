var express= require("express");
var router= express.Router();

var storesController = require("../controllers/storesController");
var addressController = require("../controllers/addressController");
var productsController = require("../controllers/productsController");
var categoryController = require("../controllers/categoryController");


router.route("/stores")
.get(storesController.getAllStores)
.post(storesController.addToStore)
.delete(storesController.deleteAllStores);

router.route("/stores/products")
.get(productsController.getAllProductsOfAllStores);

router.route("/stores/:storeID")
.get(storesController.getOneStore)
.put(storesController.updateOneStore)
.delete(storesController.deleteOneStore);

router.route("/stores/:storeID/address")   // There is only one address for one store 
.get(addressController.getAddressOfOneStore)
.post(addressController.addAddressToOneStore)
.put(addressController.addAddressToOneStore)
.delete(addressController.deleteOneAddressOfOneStore); 

router.route("/stores/:storeID/products")
.get(productsController.getAllProductsOfOneStore)
.post(productsController.addProductToOneStore)
.delete(productsController.deleteAllProductsOfOneStore);

router.route("/stores/:storeID/products/:productID")
.get(productsController.getOneProductOfOneStore)
.put(productsController.updateOneProductOfOneStore)
.delete(productsController.deleteOneProductOfOneStore);

router.route("/stores/:storeID/products/:productID/category")
.get(categoryController.getCategoryOfOneProductOfOneStore)
.put(categoryController.updateCategoryOfOneProductOfOneStore)
.delete(categoryController.deleteCategoryOfOneProductOfOneStore);

module.exports = router;
 