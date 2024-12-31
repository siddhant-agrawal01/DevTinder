const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(`mongodb+srv://siddhant:database@cluster0.p5jvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/devtinderDB`);
};


  module.exports = connectDB;