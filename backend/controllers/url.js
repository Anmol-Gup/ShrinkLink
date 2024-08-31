const ShortUniqueId = require('short-unique-id')
const uid = new ShortUniqueId()
const Urls = require('../models/url')

const AddUrls = async (req, res) => {
    const { url } = req.body

    if (!url) {
        res.status(400).json({ shortId: '', error: "Field cannot be empty" })
        return
    }

    try {

        const shortId = uid.rnd(8)
        const result = await Urls.create({
            shortId,
            redirectUrl: url
        })
        res.status(201).json({ shortId: result.shortId, error: "" })
    }
    catch (error) {
        res.status(500).json({ shortId: "", error: "Some error occurred!" })
    }
}

const RedirectUrl = async (req, res) => {
    const { shortId } = req.params

    try {
        const url = await Urls.findOne({ shortId })
        if (!url)
            res.status(404).json({ message: "Url Not Found!" })
        else
            res.status(200).redirect(url.redirectUrl)
    } catch (error) {
        res.status(404).json({ error: error.message, message: "404! URL not found" })
    }
}

module.exports = { AddUrls, RedirectUrl }