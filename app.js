require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

const cors = require('cors')
const mongoose = require('mongoose')
const newsRouter = require('./routes/newsRoute')

app.get('/', (request, response) => {
    response.status(200).json({message : 'API is running successfully..'})
})

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully!'))

app.use('/api/v1/news', newsRouter)

app.listen(PORT,
    console.log(`Server started running on http://localhost:${PORT}/api/v1/news/`))