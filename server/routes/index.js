const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const catchErrors = require("../handlers/errorHandlers");

router.get('/', (req, res) => {
  res.render('index');
});

router.get("/novels-rockstar", mainController.novelsPage)

module.exports = router;
