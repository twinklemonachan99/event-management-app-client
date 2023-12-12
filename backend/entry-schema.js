const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  entry: String,
  eventName: String,
  eventType: Number,
  date: String,
  location: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // This references the User model
  },
  IsApproved: String,
});

module.exports = mongoose.model("Events", eventSchema);

