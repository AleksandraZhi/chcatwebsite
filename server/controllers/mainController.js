const mongoose = require('mongoose');
const Novel = mongoose.model('Novel');
const util = require('util');
const year = require('year');

exports.mainPage = (req, res) => {
  var copyrightYear = year();
  res.render("../views/index", {copyrightYear});
}

exports.novelsPage = async (req, res) => {
  const text = await Novel.findOne( {
    bookTitle: "Рокзвезда"
  }).exec();
  const bookTitle = util.format(text.bookTitle);
  const bookChapter = util.format(text.bookChapter);
  const bookText = util.format(text.bookPath);
  var copyrightYear = year();
  res.render("../views/novels-main", {bookTitle, bookChapter, bookText, copyrightYear});
}
