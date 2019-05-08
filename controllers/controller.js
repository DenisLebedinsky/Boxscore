const createError = require('http-errors')
const getData = require('./getData')
const dbController = require('./dbController')
const Game = require('../models/game').Game

const controller = {
    getQuery: async (league, res, next) => {
        if (league) {
            try {
                const game = await Game.findOne({ league: league })
                if (!game) {
                    if (Date.now() - game.updatedAt.getTime() > 15 * 1000) {
                        const result = await getData(league)
                        await dbController.saveUpdateGame(result.data)
                        res.send(result)
                    } else {
                        res.send(game.data)
                    }
                } else {
                    return next(createError(404, 'legue is not found'))
                }
            } catch (err) {
                return next(err)
            }
        } else {
            return next(createError(500))
        }
    },
}

module.exports = controller
