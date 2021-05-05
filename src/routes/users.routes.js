const express = require("express");
const routes = express.Router();
const passport = require("passport");
const User = require("../models/user");

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/user", (req, res) => {
  res.json(User.find());
});

routes.get("/signup", (req, res) => {
  res.render("signup");
});

routes.post("/signup", async (req, res) => {
  const { username, password, confirm_password, email } = req.body;

  if (password != confirm_password) {
    res.render("signup");
  }

  const confirmEmail = User.findOne({ email: email });
  if (confirmEmail) {
    res.render("signup");
  } else {
    const Newuser = new User({ username, password, email });
    Newuser.password = await Newuser.ConfigPassword(password);
    await Newuser.save();
    console.log(Newuser);
    res.redirect("signin");
  }
});

routes.get("/signin", (req, res) => {
  res.render("signin");
});

routes.post(
  "/singnin",
  passport.authenticate("local", {
    failureRedirect: "/signin",
    successRedirect: "/index",
    failureFlash: true,
  })
);
module.exports = routes;
