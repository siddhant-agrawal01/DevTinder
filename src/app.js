const express = require("express");
const app = express();

const connectDB = require("./config/database");
const UserModel = require("./models/user");

app.post("/signup", async (req, res) => {
  //creating  new instance of user model
  const user = new UserModel({
    firstName: "sid",
    lastName: "agrawal",
    email: "sid@gmail.com",
    password: "siddhant123",
    age: 22,
  });

  try {
    await user.save();
    res.send("user created");
  } catch (err) {
    res.status(400).send("error in creating user"+ err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("error in connecting database");
  });
