const express = require('express')
const { AddUrls, RedirectUrl } = require('../controllers/url')
const router = express.Router()

router.post('/', AddUrls)
router.get('/:shortId', RedirectUrl)

module.exports = router