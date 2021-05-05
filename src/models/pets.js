const { Schema, model } = require("mongoose");

const pets = new Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("newPet", pets);
