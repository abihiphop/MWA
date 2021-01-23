const mongoose = require("mongoose");
const Stores = mongoose.model("Stores"); // Using the Schema we modeled in stores-model

module.exports.getAllProductsOfAllStores = function (req, res) {
  Stores.find()
    .select("products")
    .exec(function (err, myProduct) {
      const response = {
        status: 200,
        message: myProduct,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!myProduct) {
        response.status = 404;
        response.message = {
          message: "Sorry there are no Products in all Stores",
        };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getAllProductsOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  Stores.findById(storeID)
    .select("products")
    .exec(function (err, myProduct) {
      const response = {
        status: 200,
        message: myProduct,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!myProduct) {
        response.status = 404;
        response.message = {
          message: "Sorry there are no product for this store",
        };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneProductOfOneStore = function (req, res) {
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
        response.message = myProduct.products.id(productID);
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.addProductToOneStore = function (req, res) {
  const storeID = req.params.storeID;
  console.log("POST to add address");
  if (req.body) {
    const productTagArrays = req.body.productTag.split(/,/);
    Stores.update(
      { _id: storeID },
      {
        $push: {
          products: {
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productCategory: {
              __id: req.body.IdC,
              name: req.body.NameC,
              productSubCategory: {
                __id: req.body.IdSC,
                name: req.body.NameSC,
              },
            },
            productPrice: parseFloat(req.body.productPrice),
            productTag: productTagArrays,
            currency: req.body.currency,
            productImages: req.body.productImages,
          },
        },
      },
      function (err, addr) {
        const response = {
          status: 201,
          message: addr,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        res.status(response.status).json(response.message);
      }
    );
  }
};

module.exports.updateOneProductOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  const productID = req.params.productID;
  if (req.body) {
    const productTagArrays = req.body.productTag.split(/,/);
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
          prod.products.id(productID).productName = req.body.productName;
          prod.products.id(productID).productTag = productTagArrays;
          // Many fields needed to be updated can be added here
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

module.exports.deleteOneProductOfOneStore = function (req, res) {
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
        prod.products.id(productID).remove();
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

module.exports.deleteAllProductsOfOneStore = function (req, res) {
  const response = {
    status: 204,
    message: "Coming with this future soon",
  };
  res.status(response.status).json(response.message);

  /*
      const storeID = req.params.storeID;
  
      Stores.delete({_id:storeID},{ $unset: { products: 1 } },function (err, prod) {
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
            message: "Sorry there is no store with the ID " + storeID,
          };
        }
        res.status(response.status).json(response.message);
      });*/
};
