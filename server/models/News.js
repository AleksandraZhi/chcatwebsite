const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Schema = mongoose.Schema

const newsSchema = new mongoose.Schema(
	{
		date: String,
		text: String,
		link: String,
	},
	{
		collection: 'news',
	}
)

module.exports = mongoose.model('News', newsSchema)
