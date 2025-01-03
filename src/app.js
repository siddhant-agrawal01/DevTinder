const express = require("express");
const app = express();

const connectDB = require("./config/database");
const UserModel = require("./models/user");

// this is is middle ware for all my routes that convertes the body of request to json and it works for all the routes
app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating  new instance of user model
  const user = new UserModel(req.body);

  try {
    await user.save();
    res.send("user created");
  } catch (err) {
    res.status(400).send("error in creating user" + err.message);
  }
});

//feed api
app.get("/feed", async (req, res) => {
  try {
    //passing empty object to find all users
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("error in getting users" + error);
  }
});

app.delete("/user", async (req,res)=>{
  const userId = req.body.userId
  try {
    const deleted = await UserModel.findByIdAndDelete(userId)
    res.send("user deleted")
  }
  catch(err){
    res.status(400).send("error in deleting user" + err)
  }
})

app.patch("/user/:userId",async(req,res)=>{
  const userId = req.params?.userId
  const data = req.body

  // Remove email field if present
  if (data.email) {
    delete data.email;
  }

  // Validate fields
  const allowedFields = ["name", "age", "password"]; // Add other allowed fields here
  const updateData = {};
  for (const key of Object.keys(data)) {
    if (allowedFields.includes(key)) {
      updateData[key] = data[key];
    }
  }
   
  try {
    const user = await UserModel.findByIdAndUpdate({_id:userId},updateData,{
      returnDocument: 'after',
      runValidators: true
    });
    res.send("user updated");
  }
  catch(err){
    res.status(400).send("error in updating user" + err)
  }

})

app.get('/user', async (req,res)=>{
   
  const singleUser = await UserModel.findOne(req.body.email);
  res.send(singleUser)
})

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



