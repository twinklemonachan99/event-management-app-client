
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // Reference to the User model
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model("Notification", notificationSchema);