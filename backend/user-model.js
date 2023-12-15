const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    phoneNo: String,
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roles", // This references the Role model
    },
    roleType:Number
    // Other fields related to the post
  });

  module.exports = mongoose.model("Users", userSchema);