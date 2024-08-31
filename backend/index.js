require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const connectDB = require('./connection')
const urlRouter = require('./routes/url')
const cors = require('cors')

connectDB(process.env.MONGODB_URL)

app.use(cors())
app.use(express.json())
app.use('/', urlRouter)

app.listen(port, () => console.log(`Server is running at port no. ${port}...`))

