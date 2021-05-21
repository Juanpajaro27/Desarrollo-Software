const express = require("express");
const routes = express.Router();
const passport = require("passport");
const User = require("../models/user");

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/user", async (req, res) => {
  const USER = await User.find();
  res.json(USER);
});

routes.get("/signup", (req, res) => {
  res.render("signup");
});

routes.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const confirmEmail = await User.findOne({ email: email });
  if (confirmEmail) {
    res.json("Email found");
  } else {
    const Newuser = new User({ username, password, email });
    Newuser.password = await Newuser.ConfigPassword(password);
    await Newuser.save();
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

routes.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("index");
});

module.exports = routes;
