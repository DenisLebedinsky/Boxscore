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
  away_errors: {
    type: Number
  },
  home_errors: {
    type: String
  },
  away_batters: [
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
      bat_order: {
        type: Number
      },
      sub_bat_order: {
        type: Number
      },
      sacrifices: {
        type: Number
      },
      at_bats: {
        type: Number
      },
      plate_appearances: {
        type: Number
      },
      singles: {
        type: Number
      },
      doubles: {
        type: Number
      },
      triples: {
        type: Number
      },
      home_runs: {
        type: Number
      },
      sac_flies: {
        type: Number
      },
      sac_hits: {
        type: Number
      },
      stolen_bases: {
        type: Number
      },
      caught_stealing: {
        type: Number
      },
      rbi_with_two_outs: {
        type: Number
      },
      total_bases: {
        type: Number
      },
      runs: {
        type: Number
      },
      hits: {
        type: Number
      },
      rbi: {
        type: Number
      },
      walks: {
        type: Number
      },
      strike_outs: {
        type: Number
      },
      left_on_base: {
        type: Number
      },
      hit_by_pitch: {
        type: Number
      },
      team_abbreviation: {
        type: String
      },
      ops: {
        type: Number
      },
      avg: {
        type: Number
      },
      obp: {
        type: Number
      },
      slg: {
        type: Number
      },
      at_bats_per_home_run: {
        type: Number
      },
      at_bats_per_rbi: {
        type: Number
      },
      walk_rate: {
        type: Number
      },
      plate_appearances_per_rbi: {
        type: Number
      },
      plate_appearances_per_home_run: {
        type: Number
      },
      extra_base_hits: {
        type: Number
      },
      stolen_base_average: {
        type: Number
      },
      strikeout_rate: {
        type: Number
      },
      ops_string: {
        type: String
      },
      slg_string: {
        type: String
      },
      obp_string: {
        type: String
      },
      avg_string: {
        type: String
      },
      batting_highlights: {
        type: String
      }
    }
  ],
  home_batters: [
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
      bat_order: {
        type: Number
      },
      sub_bat_order: {
        type: Number
      },
      sacrifices: {
        type: Number
      },
      at_bats: {
        type: Number
      },
      plate_appearances: {
        type: Number
      },
      singles: {
        type: Number
      },
      doubles: {
        type: Number
      },
      triples: {
        type: Number
      },
      home_runs: {
        type: Number
      },
      sac_flies: {
        type: Number
      },
      sac_hits: {
        type: Number
      },
      stolen_bases: {
        type: Number
      },
      caught_stealing: {
        type: Number
      },
      rbi_with_two_outs: {
        type: Number
      },
      total_bases: {
        type: Number
      },
      runs: {
        type: Number
      },
      hits: {
        type: Number
      },
      rbi: {
        type: Number
      },
      walks: {
        type: Number
      },
      strike_outs: {
        type: Number
      },
      left_on_base: {
        type: Number
      },
      hit_by_pitch: {
        type: Number
      },
      team_abbreviation: {
        type: String
      },
      ops: {
        type: Number
      },
      avg: {
        type: Number
      },
      obp: {
        type: Number
      },
      slg: {
        type: Number
      },
      at_bats_per_home_run: {
        type: Number
      },
      at_bats_per_rbi: {
        type: Number
      },
      walk_rate: {
        type: Number
      },
      plate_appearances_per_rbi: {
        type: Number
      },
      plate_appearances_per_home_run: {
        type: Number
      },
      extra_base_hits: {
        type: Number
      },
      stolen_base_average: {
        type: Number
      },
      strikeout_rate: {
        type: Number
      },
      ops_string: {
        type: String
      },
      slg_string: {
        type: String
      },
      obp_string: {
        type: String
      },
      avg_string: {
        type: String
      },
      batting_highlights: {
        type: String
      }
    }
  ],
  away_pitchers: [
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
      pitch_order: {
        type: Number
      },
      win: {
        type: Boolean
      },
      loss: {
        type: Boolean
      },
      save: {
        type: Boolean
      },
      hold: {
        type: Boolean
      },
      era: {
        type: Number
      },
      whip: {
        type: Number
      },
      innings_pitched: {
        type: Number
      },
      hits_allowed: {
        type: Number
      },
      runs_allowed: {
        type: Number
      },
      earned_runs: {
        type: Number
      },
      walks: {
        type: Number
      },
      intentional_walks: {
        type: Number
      },
      strike_outs: {
        type: Number
      },
      home_runs_allowed: {
        type: Number
      },
      pitch_count: {
        type: Number
      },
      pitches_strikes: {
        type: Number
      },
      wild_pitches: {
        type: Number
      },
      hit_by_pitch: {
        type: Number
      },
      errors: {
        type: Number
      },
      team_abbreviation: {
        type: String
      }
    }
  ],
  home_pitchers: [
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
      pitch_order: {
        type: Number
      },
      win: {
        type: Boolean
      },
      loss: {
        type: Boolean
      },
      save: {
        type: Boolean
      },
      hold: {
        type: Boolean
      },
      era: {
        type: Number
      },
      whip: {
        type: Number
      },
      innings_pitched: {
        type: Number
      },
      hits_allowed: {
        type: Number
      },
      runs_allowed: {
        type: Number
      },
      earned_runs: {
        type: Number
      },
      walks: {
        type: Number
      },
      intentional_walks: {
        type: Number
      },
      strike_outs: {
        type: Number
      },
      home_runs_allowed: {
        type: Number
      },
      pitch_count: {
        type: Number
      },
      pitches_strikes: {
        type: Number
      },
      wild_pitches: {
        type: Number
      },
      hit_by_pitch: {
        type: Number
      },
      errors: {
        type: Number
      },
      team_abbreviation: {
        type: String
      }
    }
  ],
  away_fielding: [
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
      errors: {
        type: Number
      },
      team_abbreviation: {}
    }
  ],
  home_fielding: [
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
      errors: {
        type: Number
      },
      team_abbreviation: {
        type: String
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
  away_batter_totals: {
    sacrifices: {
      type: Number
    },
    at_bats: {
      type: Number
    },
    plate_appearances: {
      type: Number
    },
    singles: {
      type: Number
    },
    doubles: {
      type: Number
    },
    triples: {
      type: Number
    },
    home_runs: {
      type: Number
    },
    sac_flies: {
      type: Number
    },
    sac_hits: {
      type: Number
    },
    stolen_bases: {
      type: Number
    },
    caught_stealing: {
      type: Number
    },
    rbi_with_two_outs: {
      type: Number
    },
    total_bases: {
      type: Number
    },
    runs: {
      type: Number
    },
    hits: {
      type: Number
    },
    rbi: {
      type: Number
    },
    walks: {
      type: Number
    },
    strike_outs: {
      type: Number
    },
    left_on_base: {
      type: Number
    },
    hit_by_pitch: {
      type: Number
    },
    ops: {
      type: Number
    },
    avg: {
      type: Number
    },
    obp: {
      type: Number
    },
    slg: {
      type: Number
    },
    at_bats_per_home_run: {
      type: Number
    },
    at_bats_per_rbi: {
      type: Number
    },
    walk_rate: {
      type: Number
    },
    plate_appearances_per_rbi: {
      type: Number
    },
    plate_appearances_per_home_run: {
      type: Number
    },
    extra_base_hits: {
      type: Number
    },
    stolen_base_average: {
      type: Number
    },
    strikeout_rate: {
      type: Number
    },
    ops_string: {
      type: String
    },
    slg_string: {
      type: String
    },
    obp_string: {
      type: String
    },
    avg_string: {
      type: String
    },
    batting_highlights: {
      type: String
    }
  },
  home_batter_totals: {
    sacrifices: {
      type: Number
    },
    at_bats: {
      type: Number
    },
    plate_appearances: {
      type: Number
    },
    singles: {
      type: Number
    },
    doubles: {
      type: Number
    },
    triples: {
      type: Number
    },
    home_runs: {
      type: Number
    },
    sac_flies: {
      type: Number
    },
    sac_hits: {
      type: Number
    },
    stolen_bases: {
      type: Number
    },
    caught_stealing: {
      type: Number
    },
    rbi_with_two_outs: {
      type: Number
    },
    total_bases: {
      type: Number
    },
    runs: {
      type: Number
    },
    hits: {
      type: Number
    },
    rbi: {
      type: Number
    },
    walks: {
      type: Number
    },
    strike_outs: {
      type: Number
    },
    left_on_base: {
      type: Number
    },
    hit_by_pitch: {
      type: Number
    },
    ops: {
      type: Number
    },
    avg: {
      type: Number
    },
    obp: {
      type: Number
    },
    slg: {
      type: Number
    },
    at_bats_per_home_run: {
      type: Number
    },
    at_bats_per_rbi: {
      type: Number
    },
    walk_rate: {
      type: Number
    },
    plate_appearances_per_rbi: {
      type: Number
    },
    plate_appearances_per_home_run: {
      type: Number
    },
    extra_base_hits: {
      type: Number
    },
    stolen_base_average: {
      type: Number
    },
    strikeout_rate: {
      type: Number
    },
    ops_string: {
      type: String
    },
    slg_string: {
      type: String
    },
    obp_string: {
      type: String
    },
    avg_string: {
      type: String
    },
    batting_highlights: {
      type: String
    }
  }
});

schema.statics.findOnList = (id, callback) => {
  statsMLB.findOne({ id: id }, callback);
};

schema.statics.findall = callback => {
  statsMLB.find({}, callback);
};

exports.StatsMLB = mongoose.model("StatsMLB", schema);
