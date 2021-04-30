const express = require("express");
const routes = express.Router();
const pets = require("../models/pets");

routes.get("/pets", (req, res) => {
  const pet = pets.find();
  res.json(pet);
});

module.exports = routes;
