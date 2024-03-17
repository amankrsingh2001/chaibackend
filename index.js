require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("App is running");
});
app.get("/twit", (req, res) => {
  res.send("twitter started");
});

app.get("/local", (req, res) => {
  res.send("<h1>Please login at chai or code</h1>");
});

app.listen(PORT, () => {
  console.log(`Example App is listining in ${PORT}`);
});
