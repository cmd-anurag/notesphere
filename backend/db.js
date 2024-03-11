const mongoose = require('mongoose')
const mongoURI = `mongodb+srv://capedcrusader2120:${process.env.password}@notesphere.jhm4ly2.mongodb.net/`

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>console.log("Connected to MongoDB")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;