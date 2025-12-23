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
    console.log("User signed up:", user);
  } catch (error) {
    res.status(400).send("Error signing up user");
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
