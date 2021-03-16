const mongoose = require('mongoose')
const Novel = mongoose.model('Novel')
const path = require('path')
const fs = require('fs')
const util = require('util')
const year = require('year')

exports.mainPage = (req, res) => {
	const copyrightYear = year()
	res.render('../views/index', { copyrightYear })
}

exports.novelsPage = async (req, res) => {
	try {
		const currentChapterNr = parseInt(req.params.chapterNr)
		const text = await Novel.findOne({
			title: 'Рокзвезда',
			chapter: `${currentChapterNr}`,
		}).exec()
		const totalChapters = await Novel.countDocuments({
			title: 'Рокзвезда',
		})
		const title = util.format(text.title)
		const chapter = util.format(text.chapter)
		const pathToText = util.format(text.pathToText)
		const chapterText = fs.readFileSync(
			path.join(__dirname, pathToText),
			'utf-8'
		)
		const copyrightYear = year()
		res.render('../views/novels-main', {
			title,
			chapter,
			chapterText,
			copyrightYear,
			totalChapters,
		})
	} catch (err) {
		err => console.log(err)
	}
}
