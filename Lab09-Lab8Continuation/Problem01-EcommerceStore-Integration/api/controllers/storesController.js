const mongoose = require("mongoose");
const Stores = mongoose.model("Stores"); // Using the Schema we modeled in stores-model

module.exports.getAllStores = function (req, res) {
  Stores.find().limit(7)
    .exec(function (err, stores) {
      const response = {
        status: 200,
        message: stores
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!stores) {
        response.status = 404;
        response.message = { message: "Sorry there are no stores in the record" };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.addToStore = function (req, res) {
  console.log("POST to add stores");
  if (req.body) {
    const productTagArrays = req.body.productTag;
    console.log(req.body.storeName);
    Stores.create(
      {
        storeName: req.body.storeName,
        storeAddress:
        {
          country:req.body.country,
          state:req.body.state,
          city: req.body.city,
          zip:parseInt(req.body.zip),
          street: req.body.street,
        },
        email:req.body.email,
        contactPerson:req.body.contactPerson,
        products: 
        [ 
          {
            productName : req.body.productName,
           /* productCategory:
            {
               __id:req.body.__id,
               name:req.body.name,
               productSubCategory:
               {
                 __id:req.body.__id,
                 name:req.body.name,
               }
               
            },*/	 
            productDescription: req.body.productDescription,
            productTag : productTagArrays, 
            productPrice : parseInt(req.body.productPrice),
            currency : req.body.currency,
            productImages: req.body.productImages,
          }		
        ] 
      },
      function (err, stores) {
        const response = {
          status: 201,
          message: "success",
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        if (!stores) {
          response.status = 404;
          response.message = {
            message: "Sorry store is not created",
          };
        }
        res.status(response.status).json(response.message);
      }
    );
  } else {
    console.log("Data is missing from POST body");
    res.status(400).json({ error: "Data is missing from POST body" });
  }
};

module.exports.getOneStore = function (req, res) {
  const storeID = req.params.storeID;
  Stores.findById(storeID).exec(function (err, store) {
    const response = {
      status: 200,
      message: store
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    }
    if (!store) {
      response.status = 404;
      response.message = { message: "Sorry there is no store with the ID "+storeID };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.updateOneStore = function (req, res) {
  const storeID = req.params.storeID;
  Stores.findById(storeID)
    .select("-products")
    .exec(function (err, store) {
      const response = {
        status: 204,
        message: store,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      } else if (!store) {
        response.status = 404;
        response.message = {
          message: "Sorry there is no store with the ID " + storeID,
        };
      } else if (response.status !== 204) {
        res.status(response.status).json(response.message);
      } else {
        store.storeName= req.body.storeName;
        const newStoreAddress = {
          country:req.body.country,
          state:req.body.state,
          city: req.body.city,
          zip:parseInt(req.body.zip),
          street: req.body.street,
        };
        store.storeAddress=newStoreAddress;
        console.log(store.storeAddress);

        store.email=req.body.email;
        store.contactPerson=req.body.contactPerson;
        store.save(function (err, updatedstore) {
          response.message = updatedstore;
          if (err) {
            response.status = 500;
            response.messge = err;
          }
          res.status(response.status).json(response.message);
        });
      }
    });


}

module.exports.deleteOneStore = function (req, res) {
  const storeID = req.params.storeID;
  Stores.findByIdAndRemove(storeID).exec(function (err, store) {
    const response = {
      status: 204,
      message: store,
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    } else if (!store) {
      response.status = 404;
      response.message = {
        message: "Sorry there is no store with the ID " + storeID,
      };
    }
    res.status(response.status).json(response.message);
  });
}

module.exports.deleteAllStores = function (req, res) {
  const response = {
    status: 204,
    message: "Coming with this future soon",
  };
  res.status(response.status).json(response.message);

  /*Stores.deleteMany({},function (err, store) {
    const response = {
      status: 204,
      message: store,
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    } else if (!store) {
      response.status = 404;
      response.message = {
        message: "Sorry there is no store with the ID " + storeID,
      };
    }
    res.status(response.status).json(response.message);
  });*/
}



 






