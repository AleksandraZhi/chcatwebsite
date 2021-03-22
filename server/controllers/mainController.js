const mongoose = require('mongoose')
const Novel = mongoose.model('Novel')
const ShortStory = mongoose.model('ShortStory')
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
		const currentNovelSlug = req.params.novelTitle
		const currentChapterNr = parseInt(req.params.chapterNr)
		const text = await Novel.findOne({
			slug: `${currentNovelSlug}`,
			chapter: { $regex: '^' + currentChapterNr, $options: 'i' },
		}).exec()
		const totalChapters = await Novel.countDocuments({
			slug: `${currentNovelSlug}`,
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
			currentNovelSlug,
			copyrightYear,
			totalChapters,
		})
	} catch (err) {
		err => console.log(err)
	}
}

exports.shortsPage = async (req, res) => {
	try {
		const currentShortStorySlug = req.params.storyTitle
		const currentShortStoryObj = await ShortStory.findOne({
			slug: `${currentShortStorySlug}`,
		}).exec()
		const title = util.format(currentShortStoryObj.title)
		const pathToText = `${util.format(currentShortStoryObj.pathToText)}_${
			currentShortStorySlug.split('-').join('_') + '.txt'
		}`
		const storyText = fs.readFileSync(path.join(__dirname, pathToText), 'utf-8')
		const copyrightYear = year()
		res.render('../views/shorts-main', {
			title,
			storyText,
			currentShortStorySlug,
			copyrightYear,
		})
	} catch {
		err => console.log(err)
	}
}
