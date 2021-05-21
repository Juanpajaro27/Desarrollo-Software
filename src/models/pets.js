const { Schema, model } = require("mongoose");

const pets = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  filename: { type: String },
  path: { type: String },
  created: { type: String, default: Date.now() },
});

module.exports = model("newPet", pets);
