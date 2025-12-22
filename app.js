const express = require("express");
const app = express();
const port = 3001;

app.use("/test", (req, res) => {
  res.send("Hi there this is the test route");
});

app.use("/", (req, res) => {
  res.send("Hi there this is the home route");
});

app.listen(port, () => {
  console.log("Server is running on port 3001");
});
