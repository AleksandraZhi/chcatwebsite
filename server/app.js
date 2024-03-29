const express = require('express')
// const helmet = require('helmet')
const routes = require('./routes/index')
const path = require('path')

const app = express()

// app.use(helmet())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

module.exports = app
