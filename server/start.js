const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env"});

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.log("${err.message}");
});

const app = require("./server");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log("Express running on Port 7777");
});
