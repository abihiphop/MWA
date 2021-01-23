const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
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
});

const descriptionSchema = new mongoose.Schema({
  summary: {
    type: String,
  },
  benefits: [String],
  skills: [String],
});

const qualificationSchema = new mongoose.Schema({
  experience: {
    type: Number,
    required: true,
  },
  knowledge: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
});

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  companyName: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: locationSchema,

  jobType: {
    type: String,
    required: true,
  },
  description: descriptionSchema,
  qualification: qualificationSchema,

  postDate: {
    type: Date,
    required: true,
  },
});

mongoose.model("Jobs",jobSchema,"jobs");