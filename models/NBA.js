const mongoose = require("../libs/mongoose"),
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
    team_id: {
      type: String
    },
    abbreviation: {
      type: String
    },
    active: {
      type: String
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    conference: {
      type: String
    },
    division: {
      type: String
    },
    site_name: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    full_name: {
      type: String
    }
  },
  home_team: {
    team_id: {
      type: String
    },
    abbreviation: {
      type: String
    },
    active: {
      type: String
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    conference: {
      type: String
    },
    division: {
      type: String
    },
    site_name: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    full_name: {
      type: String
    }
  },
  away_period_scores: [
    {
      type: Number
    }
  ],
  home_period_scores: [
    {
      type: Number
    }
  ],
  away_stats: [
    {
      last_name: {
        type: String
      },
      first_name: {
        type: String
      },
      display_name: {
        type: String
      },
      position: {
        type: String
      },
      minutes: {
        type: Number
      },
      points: {
        type: Number
      },
      assists: {
        type: Number
      },
      turnovers: {
        type: Number
      },
      steals: {
        type: Number
      },
      blocks: {
        type: Number
      },
      field_goals_attempted: {
        type: Number
      },
      field_goals_made: {
        type: Number
      },
      three_point_field_goals_attempted: {
        type: Number
      },
      three_point_field_goals_made: {
        type: Number
      },
      free_throws_attempted: {
        type: Number
      },
      free_throws_made: {
        type: Number
      },
      defensive_rebounds: {
        type: Number
      },
      offensive_rebounds: {
        type: Number
      },
      personal_fouls: {
        type: Number
      },
      team_abbreviation: {
        type: String
      },
      is_starter: {
        type: Boolean
      },
      field_goal_percentage: {
        type: Number
      },
      three_point_percentage: {
        type: Number
      },
      free_throw_percentage: {
        type: Number
      }
    }
  ],
  home_stats: [
    {
      last_name: {
        type: String
      },
      first_name: {
        type: String
      },
      display_name: {
        type: String
      },
      position: {
        type: String
      },
      minutes: {
        type: Number
      },
      points: {
        type: Number
      },
      assists: {
        type: Number
      },
      turnovers: {
        type: Number
      },
      steals: {
        type: Number
      },
      blocks: {
        type: Number
      },
      field_goals_attempted: {
        type: Number
      },
      field_goals_made: {
        type: Number
      },
      three_point_field_goals_attempted: {
        type: Number
      },
      three_point_field_goals_made: {
        type: Number
      },
      free_throws_attempted: {
        type: Number
      },
      free_throws_made: {
        type: Number
      },
      defensive_rebounds: {
        type: Number
      },
      offensive_rebounds: {
        type: Number
      },
      personal_fouls: {
        type: Number
      },
      team_abbreviation: {
        type: String
      },
      is_starter: {
        type: Boolean
      },
      field_goal_percentage: {
        type: Number
      },
      three_point_percentage: {
        type: Number
      },
      free_throw_percentage: {
        type: Number
      }
    }
  ],
  officials: [
    {
      position: {
        type: String
      },
      first_name: {
        type: String
      },
      last_name: {
        type: String
      }
    }
  ],
  event_information: {
    temperature: {
      type: Number
    },
    site: {
      capacity: {
        type: Number
      },
      surface: {
        type: String
      },
      name: {
        type: String
      },
      state: {
        type: String
      },
      city: {
        type: String
      }
    },
    attendance: {
      type: Number
    },
    duration: {
      type: String
    },
    status: {
      type: String
    },
    season_type: {
      type: String
    },
    start_date_time: {
      type: String
    }
  },
  away_totals: {
    minutes: {
      type: Number
    },
    points: {
      type: Number
    },
    assists: {
      type: Number
    },
    turnovers: {
      type: Number
    },
    steals: {
      type: Number
    },
    blocks: {
      type: Number
    },
    field_goals_attempted: {
      type: Number
    },
    field_goals_made: {
      type: Number
    },
    three_point_field_goals_attempted: {
      type: Number
    },
    three_point_field_goals_made: {
      type: Number
    },
    free_throws_attempted: {
      type: Number
    },
    free_throws_made: {
      type: Number
    },
    defensive_rebounds: {
      type: Number
    },
    offensive_rebounds: {
      type: Number
    },
    personal_fouls: {
      type: Number
    },
    field_goal_percentage: {
      type: Number
    },
    three_point_percentage: {
      type: Number
    },
    free_throw_percentage: {
      type: Number
    }
  },
  home_totals: {}
});

schema.statics.findOnList = (id, callback) => {
  statsNBA.findOne({ id: id }, callback);
};

schema.statics.findall = callback => {
  statsNBA.find({}, callback);
};

exports.StatsNBA = mongoose.model("StatsNBA", schema);
