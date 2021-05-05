const passport = require("passport");
const strategy = require("passport-local").Strategy;
const user = require("../models/user");

passport.use(
  new strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (username, password, email, done) => {
      const NewUser = await user.findOne({ email: email });

      if (!NewUser) {
        return done(null, false);
      } else {
        const match = await NewUser.MatchPassword(password);

        if (match) {
          return done(null, NewUser);
        } else {
          return done(null, false);
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  await user.findById(id);
  done(null, user);
});
