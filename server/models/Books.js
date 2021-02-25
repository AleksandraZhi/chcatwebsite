const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Schema = mongoose.Schema

const novelSchema = new mongoose.Schema(
	{
		title: String,
		chapter: String, //can be chapter name or chapter number
		pathToText: String, //URL where the file is stored in public folder
	},
	{
		collection: 'novels',
	}
)

module.exports = mongoose.model('Novel', novelSchema)
