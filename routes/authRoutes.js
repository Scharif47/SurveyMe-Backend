const passport = require("passport");

module.exports = (app) => {
  // get token from google oauth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // come back with valid token
  app.get("/auth/google/callback", passport.authenticate("google"));
};
