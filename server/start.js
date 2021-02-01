const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env"});

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.log("${err.message}");
});

require("./models/Books")

const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log("Express running on Port 7777");
});
