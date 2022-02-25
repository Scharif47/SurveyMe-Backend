const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config({ path: "./utils/.env" });

// save express functionality in app
const app = express();

// use passport with the google strategy for google logins
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token: ", accessToken);
      console.log("refresh token: ", refreshToken);
      console.log("profile: ", profile);
    }
  )
);

// set PORT variable
const PORT = process.env.PORT || 4000;

// get token from google oauth
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// come back with valid token
app.get("/auth/google/callback", passport.authenticate("google"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
