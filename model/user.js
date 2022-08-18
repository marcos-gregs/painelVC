const mongoose = require("mongoose");

const bakerySchema = mongoose.Schema({
  user: { type: String, required: true },
  office: String,
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
