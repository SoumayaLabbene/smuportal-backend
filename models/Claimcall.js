const mongoose = require("mongoose");

const ClaimcallSchema = new mongoose.Schema({
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
    }
    // },
    // Id: {
    //   type: Number,
    //   unique: true,
    //   required: true,
    //   min: 1,
    //   max: 9999,
    //   validate: {
    //     validator: Number.isInteger,
    //     message: "{VALUE} is not an integer value"
    //   }
    // }
    /*Image: {
      type: image,
      required: true,
    },*/
  
  });
  module.exports = mongoose.model("Claimcall", ClaimcallSchema);
