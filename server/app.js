const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const helpers = require("./helpers");
const path = require('path');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes)


module.exports = app;
