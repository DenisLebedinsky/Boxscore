const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

// - перенести в контроллер
router.get('/data', function(req, res, next) {
    controller.checkFeed(req.query.league, res, next)
})

module.exports = router
