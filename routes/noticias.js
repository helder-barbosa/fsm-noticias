const express = require('express')
const Noticia = require('../models/noticia')

const router = express.Router()


router.get('/', (req, res) => {
  res.send('noticias publicas')
})

module.exports = router