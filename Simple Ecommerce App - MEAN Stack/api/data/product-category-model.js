const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const productSubSubSubCategorySchema = new mongoose.Schema({
    __id:{
      type:String,
     // required: true,
    },
    name:{
      type:String,
    //  required: true,
    }
  });
  
  const productSubSubCategorySchema = new mongoose.Schema({
    __id:{
      type:String,
     // required: true,
    },
    name:{
      type:String,
      //required: true,
    },
    productSubSubSubCategory:productSubSubSubCategorySchema
  
  });
  
  const productSubCategorySchema= new mongoose.Schema({
    __id:{
      type:String,
     // required: true,
    },
    name:{
      type:String,
     // required: true,
    },
    productSubSubCategory:productSubSubCategorySchema
  });
  

  module.exports.myproductCategorySchema = function(){
   return new mongoose.Schema({
        __id:{
          type:String,
         // required: true,
        },
        name:{
        type:String,
          //required: true,
        },
        productSubCategory:productSubCategorySchema
        });
  }
 
  