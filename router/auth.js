const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("home");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
  //res.send("reached");
});

module.exports = router;
