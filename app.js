const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User signed up successfully");
  } catch (error) {
    console.log("Error signing up user", error);
    res.status(400).send("Error signing up user", error);
  }
});

//get user by emailId
app.get("/getUser", async (req, res) => {
  const userEmail = req.body.emailId;
  //   console.log(userEmail);

  try {
    const user = await User.find({ emailId: userEmail });
    if (user.length === 0) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("somethning went wrong in getUser", err);
  }
});

//get all users info from the DB
app.get("/getAllUsers", async (req, res) => {
  try {
    const user = await User.find({});

    res.send(user);
  } catch (err) {
    res.status(400).send("somethning went wrong in getAllUsers", err);
  }
});

//Delete user by emailId
app.delete("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  console.log(userEmail);

  try {
    const result = await User.deleteOne({ emailId: userEmail });
    console.log(result);
    if (result.deletedCount === 0) {
      res.status(404).send("user not found");
    } else {
      res.send("User deleted successfully");
    }
  } catch (err) {
    res.status(400).send("somethning went wrong in deleteUser", err);
  }
});

//update user by id
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const updates = req.body;
  //   console.log("userId:", userId, "tobe updated", updates);

  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, updates);
    res.send("User data updated successfully");
  } catch (err) {
    res.status(400).send("something went wrong in updateUser", err);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection successfully established");
    app.listen(port, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
