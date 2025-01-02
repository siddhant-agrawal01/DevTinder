const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  gender: {
    type: String,
  },
  photoUrl: {
    type: String,
    default:
      "https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo=",
  },
  skills: {
    type: [string],
  },
  about: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
