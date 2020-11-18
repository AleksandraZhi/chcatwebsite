const express = require("express");
const router = express.Router();
// const mainController = require("../controllers/mainController");

// router.get("/", mainController.homePage);

router.get('/', (req, res) => {
  res.render('index');
});

// router.get("/", mainController.novelsPage);


router.get("/novels-rockstar", (req, res) => {
  res.render("layout");
})

module.exports = router;
