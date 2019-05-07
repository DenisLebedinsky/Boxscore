const express = require('express')
const router = express.Router()
const Game = require('../models/game').Game

const getData = require('../controllers/getData')
const controller = require('../controllers/dbController')

router.get('/data', function(req, res) {
    if (req.query.league) {
        Game.find({ league: req.query.league }, async function(err, data) {
            if (err) throw err
            if (
                Math.abs(new Date().getTime() - data.updated_at.getTime()) /
                    1000 >
                15
            ) {
                const result = await getData(req.query.league)
                await controller.saveUpdateNBA(result.data)
                res.send(result)
            } else {
                res.send(data)
            }
        })
    } else {
        res.send('invalid params').status(403)
    }
})

module.exports = router
