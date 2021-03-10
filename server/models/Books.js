const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Schema = mongoose.Schema

const novelChapterSchema = new mongoose.Schema(
	{
		title: String,
		chapter: String, //can be chapter name or chapter number
		pathToText: String, //URL where the file is stored in public folder
		slug: String, // to create a path in latin letters instead of cyrillic
	},
	{
		collection: 'novels',
	}
)

module.exports = mongoose.model('Novel', novelChapterSchema)
