const mongoose = require('mongoose');
const Novel = mongoose.model('Novel');
const path = require('path');
const fs = require('fs');
const util = require('util');
const year = require('year');

exports.mainPage = (req, res) => {
  const copyrightYear = year();
  res.render("../views/index", {copyrightYear});
}


exports.novelsPage = async (req, res) => {
  try{const bookChapterNr =  req.params.chapterNr * 1;
  const text = await Novel.findOne( {
    bookTitle: "Рокзвезда",
    bookChapter: `${bookChapterNr}`
  }).exec();
  const totalChapters = await Novel.countDocuments({bookTitle: "Рокзвезда"});
  const bookTitle = util.format(text.bookTitle);
  const bookChapter = util.format(text.bookChapter);
  const bookPath = util.format(text.bookPath);
  const bookText = fs.readFileSync(path.join(__dirname, bookPath), 'utf-8');
  const copyrightYear = year();
  res.render('../views/novels-main', {bookTitle, bookChapter, bookText, copyrightYear, totalChapters})
}
  catch {err => console.log(err)}
}
