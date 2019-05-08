const express = require('express')
const router = express.Router()
const Game = require('../models/game').Game

const getData = require('../controllers/getData')
const controller = require('../controllers/dbController')

router.get('/data', async function(req, res) {
    if (req.query.league) {
        try {
            const data = await Game.findOne({ league: req.query.league })

            if (
                Math.abs(
                    new Date().getTime() - data.updatedAt.getTime(),
                ) /
                    1000 >
                15
            ) {
                const result = await getData(req.query.league)
                await controller.saveUpdateGame(result.data)
                res.send(result)
            } else {
                res.send(data)
            }
        } catch (err) {
            if (err) throw err
            res.send(err).status(500)
        }
    }
})

module.exports = router
