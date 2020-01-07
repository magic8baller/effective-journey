require('dotenv/config')
const quotesRouter = require('express').Router()
const Quote = require('../src/resources/quote/quote.model.js')
quotesRouter.get('/', async (req, res, next) => {
	try {
		const quotes = await Quote.find({})
		res.json(quotes)
	} catch (error) {
		console.error(error.message)
	}
})

module.exports = quotesRouter