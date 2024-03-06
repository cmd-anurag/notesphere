const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/notesphere"

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>console.log("Connected to MongoDB")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;