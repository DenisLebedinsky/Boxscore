const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  league: {
    type: String
  },
  away_team: {
    _team_id: String
  },
  home_team: {
    _team_id: String
  },
  away_period_scores: [Number],
	home_period_scores: [Number],
	statsId: String,
	otherFieldsId: String
});

schema.statics.findOnList = (id, callback) => {
	game.findOne({ id: id }, callback);
};

schema.statics.findall = (callback) => {
	game.find({}, callback);
};


exports.Game = mongoose.model('Game', schema);
