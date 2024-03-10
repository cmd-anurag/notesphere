const connectToMongo = require("./db")
const express = require('express')
const cors = require('cors')

connectToMongo();


const app = express()
const port = 5000
app.use(cors());
app.use(express.json()) // middleware used to send request body

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})