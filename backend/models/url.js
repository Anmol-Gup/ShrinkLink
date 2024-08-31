const mongoose = require('mongoose')
const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    }
})

const Url = mongoose.model('shorturls', urlSchema)
module.exports = Url