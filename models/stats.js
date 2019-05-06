const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  last_name: String,
  first_name: String,
  display_name: String,
  position: String,
  bat_order: Number,
  sub_bat_order: Number,
  sacrifices: Number,
  at_bats: Number,
  plate_appearances: Number,
  singles: Number,
  doubles: Number,
  triples: Number,
  home_runs: Number,
  sac_flies: Number,
  sac_hits: Number,
  stolen_bases: Number,
  caught_stealing: Number,
  rbi_with_two_outs: Number,
  total_bases: Number,
  runs: Number,
  hits: Number,
  rbi: Number,
  walks: Number,
  strike_outs: Number,
  left_on_base: Number,
  hit_by_pitch: Number,
  team_abbreviation: String,
  ops: Number,
  avg: Number,
  obp: Number,
  slg: Number,
  at_bats_per_home_run: Number,
  at_bats_per_rbi: Number,
  walk_rate: Number,
  plate_appearances_per_rbi: Number,
  plate_appearances_per_home_run: Number,
  extra_base_hits: Number,
  stolen_base_average: Number,
  strikeout_rate: Number,
  ops_string: String,
  slg_string: String,
  obp_string: String,
  avg_string: String,
  batting_highlights: String
});

schema.statics.findOnList = (id, callback) => {
	stats_nba.findOne({ id: id }, callback);
};

schema.statics.findall = (callback) => {
	stats_nba.find({}, callback);
};


exports.Stats_nba = mongoose.model("Stats_nba", schema);
