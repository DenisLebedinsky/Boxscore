const Game = require('../models/game').Game
const dbController = {
    saveUpdateGame: async (data, next) => {
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
    },
}

module.exports = dbController
