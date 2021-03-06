const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
require("dotenv").config({ path: "./utils/.env" });
require("./models/user");

// save express functionality in app
const app = express();

// Get connection URI
const connectionString = process.env.MONGOURI;
mongoose.connect(connectionString);

// use IIFE to import function authroutes and invoke it with app parameter
require("./routes/authRoutes")(app);

// set PORT variable
const PORT = process.env.PORT || 4000;

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


app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
