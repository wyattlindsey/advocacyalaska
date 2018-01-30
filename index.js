const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
  .get('/', (req, res) => res.render('dist'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
