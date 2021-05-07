const express = require("express");
const routes = express.Router();
const pets = require("../models/pets");
const { auth } = require("../helpers/validate");

routes.get("/profile", auth, (req, res) => {
  res.render("profilePets");
});

routes.post("/profile/pets", auth, (req, res) => {});
module.exports = routes;
