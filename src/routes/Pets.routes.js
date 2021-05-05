const express = require("express");
const routes = express.Router();
const pets = require("../models/pets");

routes.get("/pets", (req, res) => {
  const pet = pets.find();
  res.json(pet);
});

routes.post("/profile/pets", (req, res) => {});
module.exports = routes;
