import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import logger from 'morgan'

import {connectDB} from './config/db.js'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
	res.send('VERY CA$H MONEY')
})

export const start = async () => {
	try {
		app.listen(PORT, () => console.log(`REST API at http://localhost:${PORT}`))
	} catch (error) {
		console.error(error)
	}
}