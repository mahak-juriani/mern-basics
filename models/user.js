const mongoose = require('mongoose')

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    }
  });
  
  // Create the User model from the schema
  module.exports = mongoose.model('User', userSchema);
  