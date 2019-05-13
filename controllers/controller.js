const Game = require('../models/game').Game
const axios = require('axios')

const controller = {}

controller.updateGame = async (data, next) => {
    const {
        league,
        away_team,
        home_team,
        away_period_scores,
        home_period_scores,
        officials,
        event_information,
        ...rest
    } = data

    try {
        await Game.updateOne(
            { league },
            {
                league,
                away_team,
                home_team,
                away_period_scores,
                home_period_scores,
                officials,
                event_information,
                extentions: rest,
            },
            { upsert: true },
        )
    } catch (err) {
        return next(err)
    }
}
controller.fetchData = league => {
    const url = process.env[league]
    return axios
        .get(url)
        .then(function(response) {
            return response
        })
        .catch(function(err) {
            console.error(err)
        })
}
controller.checkFeed = async (league, res, next) => {
    if (!league) {
        return res.send(null)
    }
    try {
        const game = await Game.findOne({ league: league })

        if (!game || Date.now() - game.updatedAt.getTime() > 15 * 1000) {
            const result = await controller.fetchData(league)
            await controller.pdateGame(result.data)
            return res.send(result.data)
        }
        res.send(game)
    } catch (err) {
        return next(err)
    }
}

module.exports = controller
