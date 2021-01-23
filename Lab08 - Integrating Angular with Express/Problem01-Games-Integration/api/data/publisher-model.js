const mongoose = require("mongoose");

module.exports.myPubSchema = function(){
  return new mongoose.Schema({
  name: {
    type: String,
   },
  country: {
    type: String,
   },
  established: {
    type: Date,
   },
  location: {
    coordinates: [Number],
  }
});
}

