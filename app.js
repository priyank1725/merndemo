const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(DB, {})
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("DB NOT CONNECTED");
  });

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

app.listen(8000, () => {
  console.log("server is running at port 8000");
});
