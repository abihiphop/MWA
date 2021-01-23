const mongoose = require("mongoose");
const productCategorySchema = require("./product-category-model.js").myproductCategorySchema();

module.exports.myProductSchema = function () {
  return new mongoose.Schema({
    productName: {
      type: String,
      required: true,
    },
    productCategory: productCategorySchema,
    productDescription: {
      type: String,
    },
    productTag: [String],
    productPrice: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: "USD",
    },
    productImages: {
      type: String,
    },
  });
};
