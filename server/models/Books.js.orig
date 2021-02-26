const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const novelSchema = new mongoose.Schema ({
  bookTitle: String,
  bookChapter: String,  //can be chapter name or chapter number
  bookPath: String  //URL where the file is stored in public folder
},
  {
    collection: "novels"
  })

module.exports = mongoose.model("Novel", novelSchema);
