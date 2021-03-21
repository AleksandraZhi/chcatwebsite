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

const shortStorySchema = new mongoose.Schema(
	{
		title: String,
		pathToText: String,
		slug: String,
	},
	{
		collection: 'short-stories',
	}
)

module.exports = mongoose.model('Novel', novelChapterSchema)
module.exports = mongoose.model('ShortStory', shortStorySchema)
