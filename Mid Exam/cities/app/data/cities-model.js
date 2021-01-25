const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  
});
 

const citySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  }, 
  loc: locationSchema,
  pop: {
    type: Number,
    required: true,
  },
   state: {
    type: String,
    required: true,
  },
});

mongoose.model("Cities",citySchema,"cities");