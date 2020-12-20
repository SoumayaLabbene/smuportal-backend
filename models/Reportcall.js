const mongoose = require("mongoose");

const ReportcallSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  Details: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 1000
  },
  Type:{
    type: String,
    required: true
  },
  Image: {
    type: String,
    require: true,
  },
  Contact: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Reportcall", ReportcallSchema);