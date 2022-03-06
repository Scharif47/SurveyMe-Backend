const mongoose = require("mongoose");

const {Schema} = mongoose

// Create Schema for users
const userSchema = new Schema(
  {
    googleId: String,
  },
  { collection: "users" }
);

const User = mongoose.model("users", userSchema);