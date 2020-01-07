require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const quotesRouter = require('./resources/quote/quote.routes')
const mongoDB = require('./config/db')
const logger = require('morgan')


const app = express()
const {PORT} = process.env
mongoDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'public')))

// app.use(quoteRouter)

app.use('/api/quotes', quotesRouter)

const start = () => app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})

module.exports = start