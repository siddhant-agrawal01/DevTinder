const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  age: {
    type: Number,
  },

  gender: {
    type: String,
    validate(value){
      if(!['male','female','otheres'].includes(value)){
        throw new Error('Gender is not valid');
      }
    }
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
},{
  timestamps: true
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
