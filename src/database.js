const Mongoose = require("mongoose");
const URI = "mongodb://localhost/PetAdoption";

Mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.log(err));

module.exports = Mongoose;
