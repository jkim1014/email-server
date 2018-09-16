const express = require('express')
const router = express.Router()

const { sendApplyEmail, sendContactEmail } = require('../src/joon-site')

router
  .route('/')
  .get((_, res) => res.send("Joon site email API").status(200))

router.post('/joonsite/apply', sendApplyEmail)
router.post('/joonsite/contact', sendContactEmail)

module.exports = router
