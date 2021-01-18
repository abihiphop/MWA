const mongoose = require("mongoose");
const productSchema = require("./product-model").myProductSchema();

const addressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  street: {
    type: String
  }
});


const storeSchema = new mongoose.Schema({
storeName: {
    type: String,
    required: true,
  },
  storeAddress:[addressSchema],
  email: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  products: [productSchema]
});

mongoose.model("Stores", storeSchema, "stores");
