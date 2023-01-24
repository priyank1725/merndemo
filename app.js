const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/connection");
//const User = require("./model/userSchema");

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  next();
};

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", middleware, (req, res) => {
  res.send("about");
});
app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/signin", (req, res) => {
  res.send("log in");
});

app.get("/signup", (req, res) => {
  res.send("register");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
