const mongoose = require("mongoose");
require("dotenv").config({ path: "./utils/.env" });
require("./user");

// Get connection URI
const connectionString = process.env.MONGOURI;

// Create a method to connect to database
const connect = () => {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      resolve();
    } else {
      mongoose
        .connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

module.exports = {};
