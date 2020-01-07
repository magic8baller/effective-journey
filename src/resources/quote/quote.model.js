require('dotenv/config')
const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
quote: {
	type: String
},
author: {
	type: String
}
},
{timestamps: true}
)

module.exports = mongoose.model('Quote', QuoteSchema)