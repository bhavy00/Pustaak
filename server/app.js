const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const routes = require('./routes/note')
const connectDB = require('./db/connect')
require('dotenv').config()
const {MONGO_URI} = require('./secrets')

app.use(bodyparser.json())
app.use('/api/v1/notes', routes)
app.use(express.static('./build'))

const PORT = 8000

const start = async () => {
    try{
        await connectDB(MONGO_URI)
        app.listen(PORT, console.log(`server is listening on port ${PORT}`))
    } catch(error) {
        console.log(error)
    }
}

start()