const mongoose = require("mongoose");
const Stores = mongoose.model("Stores"); // Using the Schema modeled in the stores-model

module.exports.getCategoryOfOneProductOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  const productID = req.params.productID;
  Stores.findById(storeID)
    .select("products")
    .exec(function (err, myProduct) {
      const response = {
        status: 404,
        message: "Sorry there are no product for this store",
      };
      if (myProduct) {
        response.status = 200;
        if (myProduct.products.id(productID))
          response.message = myProduct.products.id(productID).productCategory;
        else
          response.message = "Sorry there is no such product under this store";
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
      }
      res.status(response.status).json({ message: response.message });
    });
};

module.exports.updateCategoryOfOneProductOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  const productID = req.params.productID;
  if (req.body) {
    Stores.findById(storeID)
      .select("products")
      .exec(function (err, prod) {
        const response = {
          status: 204,
          message: prod,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        } else if (!prod) {
          response.status = 404;
          response.message = {
            message: "Sorry there is no product with the ID " + productID,
          };
        } else if (response.status !== 204) {
          res.status(response.status).json(response.message);
        } else {
          prod.products.id(productID).productCategory = 
          {
            __id:req.body.CId,
            name:req.body.CName,
          }
           // Other fields needed to be updated can be added here
          prod.save(function (err, updatedproduct) {
            response.message = updatedproduct;
            if (err) {
              response.status = 500;
              response.messge = err;
            }
            res.status(response.status).json(response.message);
          });
        }
      });
  }
};

module.exports.deleteCategoryOfOneProductOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  const productID = req.params.productID;
  Stores.findById(storeID)
    .select("products")
    .exec(function (err, prod) {
      const response = {
        status: 204,
        message: prod,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      } else if (!prod) {
        response.status = 404;
        response.message = {
          message: "Sorry there is no product with the ID " + productID,
        };
      } else if (response.status !== 204) {
        res.status(response.status).json(response.message);
      } else {
        prod.products.id(productID).productCategory.remove();
        prod.save(function (err, updatedproduct) {
          response.message = updatedproduct;
          if (err) {
            response.status = 500;
            response.messge = err;
          }
          res.status(response.status).json(response.message);
        });
      }
    });
};
