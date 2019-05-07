const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const schema = new Schema(
    {
        league: String,
        away_team: {
            team_id: String,
            abbreviation: String,
            active: String,
            first_name: String,
            last_name: String,
            conference: String,
            division: String,
            site_name: String,
            city: String,
            state: String,
            full_name: String,
        },
        home_team: {
            team_id: String,
            abbreviation: String,
            active: String,
            first_name: String,
            last_name: String,
            conference: String,
            division: String,
            site_name: String,
            city: String,
            state: String,
            full_name: String,
        },
        away_period_scores: [Number],
        home_period_scores: [Number],
        officials: [
            {
                position: String,
                first_name: String,
                last_name: String,
            },
        ],
        event_information: {
            temperature: Number,
            site: {
                capacity: Number,
                surface: String,
                name: String,
                state: String,
                city: String,
            },
            attendance: Number,
            duration: String,
            status: String,
            season_type: String,
            start_date_time: String,
        },
        extentions: Schema.Types.Mixed,
    },
    { timestamps: true },
)

exports.Game = mongoose.model('Game', schema)
