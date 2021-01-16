const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  Street: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Zipcode: {
    type: Number,
    required: true,
  },
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  Address: [addressSchema],
  Building: { type: Number, required: true },
});

mongoose.model("Student", studentSchema, "Students");
