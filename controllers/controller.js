const getData = require('./getData')
const dbController = require('./dbController')
const Game = require('../models/game').Game

const controller = {
    getQuery: async (league, res, next) => {
        if (!league) {
            return res.send(null)
        }
        try {
            const game = await Game.findOne({ league: league })

            if (!game || Date.now() - game.updatedAt.getTime() > 15 * 1000) {
                const result = await getData(league)
                await dbController.saveUpdateGame(result.data)
                return res.send(result.data)
            }
            res.send(game)
        } catch (err) {
            return next(err)
        }
    },
}

module.exports = controller
