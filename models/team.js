const mongoose = require('../libs/mongoose'),
	Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  team_id: String,
  abbreviation: String,
  active: Boolean,
  first_name: String,
  last_name: String,
  conference: String,
  division: String,
  site_name: String,
  city: String,
  state: String,
  full_name: String
});

schema.statics.findOnList = (id, callback) => {
	team.findOne({ id: id }, callback);
};

schema.statics.findall = (callback) => {
	team.find({}, callback);
};


exports.Team = mongoose.model('Team', schema);
