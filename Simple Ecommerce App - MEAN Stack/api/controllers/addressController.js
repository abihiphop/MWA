const mongoose = require("mongoose");
const Stores = mongoose.model("Stores"); // Using the Schema we modeled in stores-model

module.exports.getAddressOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  Stores.findById(storeID)
    .select("storeAddress")
    .exec(function (err, addresses) {
      const response = {
        status: 200,
        message: "",
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!addresses) {
        response.status = 404;
        response.message = {
          message: "Sorry there are no addresses for this store",
        };
      } else response.messge = addresses.storeAddress;
      res.status(response.status).json(response.message);
    });
};

module.exports.addAddressToOneStore = function (req, res) {
  const storeID = req.params.storeID;
  console.log("POST to add address");
  if (req.body) {
    Stores.update(
      { _id: storeID },
      {
        storeAddress: {
          country: req.body.country,
          state: req.body.state,
          city: req.body.city,
          zip: parseInt(req.body.zip),
          street: req.body.street,
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

module.exports.deleteOneAddressOfOneStore = function (req, res) {
  const storeID = req.params.storeID;
  console.log("Delete address");
  Stores.update(
    { _id: storeID },
    { $unset: { storeAddress: 1 } },function (err, addr) {
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
      });
};
