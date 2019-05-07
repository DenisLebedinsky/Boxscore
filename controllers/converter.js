const converter = {}

converter.toClientNBA = data => {
    return {
        league: data.league,
        away_period_scores: data.away_period_scores,
        home_period_scores: data.home_period_scores,
        away_totals: {
            p: data.away_totals.points,
            a: data.away_totals.assists,
            s: data.away_totals.steals,
        },
        home_totals: {
            p: data.home_totals.points,
            a: data.home_totals.assists,
            s: data.home_totals.steals,
        },
    }
}

converter.toClientMLB = data => {
    return {
        league: data.league,
        away_period_scores: data.away_period_scores,
        home_period_scores: data.home_period_scores,
        away_errors: data.away_errors,
        home_errors: data.home_errors,
        away_totals: {
            r: data.away_period_scores.reduce((a, b) => a + b),
            h: data.away_batter_totals.hits,
        },
        home_totals: {
            r: data.home_period_scores.reduce((a, b) => a + b),
            h: data.home_batter_totals.hits,
        },
    }
}

module.exports = converter
