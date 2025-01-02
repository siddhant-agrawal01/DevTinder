const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required:true,
  },
  password: {
    type: String,
    required:true,
  },
  age: {
    type: Number,
  },

  gender: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
