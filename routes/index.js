const express = require('express')
const router = express.Router()
const StatsNBA = require('../models/nba').StatsNBA
const StatsMLB = require('../models/mlb').StatsMLB
const getData = require('../controllers/getData')
const converter = require('../controllers/converter')
const controller = require('../controllers/dbController')

router.get('/data', function(req, res, next) {
    if (req.query.league === 'nba') {
        StatsNBA.find({}, async function(err, dataArr) {
            if (err) throw err
            const data = dataArr[0]
            if (
                Math.abs(new Date().getTime() - data.updated_at.getTime()) /
                    1000 >
                15
            ) {
                const nba = await getData.NBA()
                await controller.saveUpdateNBA(nba.data)
                const dataToClient = converter.toClientNBA(nba.data)
                res.send(dataToClient)
            } else {
                StatsNBA.find({}, function(err, response) {
                    if (err) throw err
                    const dataToClient = converter.toClientNBA(
                        response[0].data,
                    )
                    res.send(dataToClient)
                })
            }
        })
    } else if (req.params.league === 'mlb') {
        StatsMLB.find({}, async function(err, dataArr) {
            if (err) throw err
            const data = dataArr[0]
            if (
                Math.abs(new Date().getTime() - data.updated_at.getTime()) /
                    1000 >
                15
            ) {
                const mlb = await getData.MLB()
                await controller.saveUpdateMLB(mlb.data)
                const dataToClient = converter.toClientMLB(mlb.data)
                res.send(dataToClient)
            } else {
                StatsMLB.find({}, function(err, response) {
                    if (err) throw err
                    const dataToClient = converter.toClientMLB(
                        response[0].data,
                    )
                    res.send(dataToClient)
                })
            }
        })
    } else {
        res.send('invalid params').status(403)
    }
})

module.exports = router
