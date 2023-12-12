
const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users' // Reference to the User model
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Events' // Reference to the Event model
    }
  });
  
module.exports = mongoose.model('Bookmark', bookmarkSchema);