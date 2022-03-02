const express = require("express");
require("./services/passport");
require("dotenv").config({ path: "./utils/.env" });

// save express functionality in app
const app = express();

// use IIFE to import function authroutes and invoke it with app parameter
require("./routes/authRoutes")(app);

// set PORT variable
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
