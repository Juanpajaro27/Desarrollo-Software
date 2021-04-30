const express = require("express");
const routes = express.Router();
const User = require("../models/user");

routes.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

routes.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  const user = new User({ username, password, email });
  await user.save();
  res.json({ status: "User Registered" });
});

module.exports = routes;
