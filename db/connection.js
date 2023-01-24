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
