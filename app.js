require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const cors = require('cors')
const mongoose = require('mongoose')
require('./scheduler')

const app = express()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

app.use(logger('dev'))
app.use(cors())

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
  
		res.status(err.status || 500)
		res.send(err.message)
})

module.exports = app
