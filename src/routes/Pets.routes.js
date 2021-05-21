const express = require("express");
const routes = express.Router();
const pets = require("../models/pets");
const path = require("path");
const { auth } = require("../helpers/validate");

routes.get("/", auth, async (req, res) => {
  const Allpets = await pets.find();
  res.render("allpets", { Allpets });
});

routes.get("/:id", auth, async (req, res) => {
  const PET = await pets.findById(req.params.id);
  res.render("pets", { PET });
});

routes.get("/upload", auth, (req, res) => {
  res.render("UploadPets");
});

routes.post("/upload", auth, async (req, res) => {
  const { name, age, species, breed } = req.body;
  const filename = req.file.filename;
  const path = "/images/uploads" + req.file.filename;
  const Pet = new pets({ name, age, species, breed, filename, path });
  await Pet.save();
  res.redirect("UploadPets");
});

module.exports = routes;
