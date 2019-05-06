const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  away_batters: [String],
  home_batters: [String],
  away_pitchers: [String],
  home_pitchers: [String],
  away_fielding: [String],
  home_fielding: [String],
  officials: [String],
  event_information: [String]
});

schema.statics.findOnList = (id, callback) => {
	stats_nba.findOne({ id: id }, callback);
};

schema.statics.findall = (callback) => {
	stats_nba.find({}, callback);
};


exports.Stats_nba = mongoose.model("Stats_nba", schema);
