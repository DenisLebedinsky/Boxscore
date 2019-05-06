const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  last_name: "Hernández",
  first_name: "Félix",
  display_name: "Félix Hernández",
  pitch_order: 1,
  win: false,
  loss: false,
  save: false,
  hold: false,
  era: 3,
  whip: 1.17,
  innings_pitched: 6,
  hits_allowed: 5,
  runs_allowed: 2,
  earned_runs: 2,
  walks: 2,
  intentional_walks: 0,
  strike_outs: 9,
  home_runs_allowed: 0,
  pitch_count: 103,
  pitches_strikes: 71,
  wild_pitches: 1,
  hit_by_pitch: 0,
  errors: 0,
  team_abbreviation: "SEA"
});

schema.statics.findOnList = (id, callback) => {
	stats_nba.findOne({ id: id }, callback);
};

schema.statics.findall = (callback) => {
	stats_nba.find({}, callback);
};


exports.Stats_nba = mongoose.model("Stats_nba", schema);
