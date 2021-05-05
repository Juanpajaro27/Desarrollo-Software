const { Schema, model } = require("mongoose");
const bcrytjs = require("bcryptjs");

const NewUser = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

NewUser.methods.ConfigPassword = async (password) => {
  const salt = await bcrytjs.genSalt(10);
  return await bcrytjs.hash(password, salt);
};

NewUser.methods.MatchPassword = async function (password) {
  return await bcrytjs.compare(password, this.password);
};

module.exports = model("User", NewUser);
