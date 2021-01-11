
const mongoose = require('mongoose');
const Book = mongoose.model('Book');

exports.mainPage = (req, res) => {
  res.render("../views/index");
}

exports.novelsPage = async (req, res) => {
  const text = await Book.findOne( {
    _id: "5ff898e92f8d9b2e3e677a2d"
  }).exec();
  const bookTitle = JSON.stringify(text.bookTitle);
  const bookChapter = JSON.stringify(text.bookChapter);
  const bookText = JSON.stringify(text.bookText);
  res.render("../views/novels-main", {bookTitle, bookChapter, bookText});
}
