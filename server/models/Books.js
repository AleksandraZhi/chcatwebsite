const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const novelSchema = new mongoose.Schema ({
  bookType: String,  //types of books: novel, shortStory, inspiredStory, article
  bookTitle: String,
  bookChapter: String,  //can be chapter name or chapter number
  bookPath: String
},
  {
    collection: "novels"
  })

// const novelSchema = new mongoose.Schema({
//   titleID: String,
//   title: String,
//   chapterName: String,
//   file_title: String,
//   file_url: String,
// })
// //
// const shortsSchema = new mongoose.Schema ({
//   shortsName: String,
//   file_title: String,
//   file_url: String,
//   slug: String,
// })
// //
// const storiesArticlesSchema = new mongoose.Schema ({
//   type: String,
//   title: String,
//   text: String,
//   slug: String,
// })

module.exports = mongoose.model("Novel", novelSchema);
// module.exports = mongoose.model("Novel", novelSchema);
// module.exports = mongoose.model("Short", shortsSchema);
// module.exports = mongoose.model("Article", storiesArticlesSchema);
