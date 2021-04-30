const { Schema, model } = require("mongoose");
const bcrytjs = require("bcryptjs");

const NewUser = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

pets.method.ConfigPassword = async (password) => {
  const salt = await bcrytjs.getSalt(10);
  return await bcrytjs.hash(password, salt);
};

pets.method.MatchPassword = function(password){
 return await bcrytjs.compare(password, this.password);
}

module.exports = mongoose.model("User", NewUser);
