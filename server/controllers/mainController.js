
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const util = require('util');
const year = require('year');

exports.mainPage = (req, res) => {
  var copyrightYear = year();
  res.render("../views/index", {copyrightYear});
}

exports.novelsPage = async (req, res) => {
  const text = await Book.findOne( {
    _id: "5ff898e92f8d9b2e3e677a2d"
  }).exec();
  const bookTitle = util.format(text.bookTitle);
  const bookChapter = util.format(text.bookChapter);
  const bookText = util.format(text.bookText);
  var copyrightYear = year();
  res.render("../views/novels-main", {bookTitle, bookChapter, bookText, copyrightYear});
}
