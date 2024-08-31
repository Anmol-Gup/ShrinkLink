const connectDB = async (url) => {
    try {
        const mongoose = require('mongoose')
        await mongoose.connect(url)
        console.log("Connection Successful!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB