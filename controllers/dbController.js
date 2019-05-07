const statsNBA = require("../models/nba").statsNBA;
const StatsMLB = require("../models/mlb").StatsMLB;
const controller = {};
/*
controller.saveNBA = data => {
  var nba = new NBA({data});
  nba.save(err => {
    if (err) throw err;
    console.log("data NBA save in db");
  });
};
*/
controller.saveUpdateMLB = data => {
  preparation(data);

  StatsMLB.find({}, (err, nba) => {
    if (err) throw err;
    if (nba.length > 0) {
      var doc = nba[0];
      doc.updateOne(data, err => {
				if (err) throw err;
				
      });
    } else {
      var mlb = new StatsMLB(data);
      mlb.save(data, err => {
        if (err) throw err;
        console.log("data MLB save");
      });
    }
  });

  function preparation(data) {
    data.id = Math.floor(Math.random() * 100000000);
    data.updated_at = new Date();

    data.away_pitchers.forEach((el, i, arr) => {
      arr[i]._save = el.save;
      delete arr[i].save;
    });

    data.away_pitchers.forEach((el, i, arr) => {
      arr[i]._errors = el.errors;
      delete arr[i].errors;
    });

    data.away_fielding.forEach((el, i, arr) => {
      arr[i]._errors = el.errors;
      delete arr[i].errors;
    });

    data.home_fielding.forEach((el, i, arr) => {
      arr[i]._errors = el.errors;
      delete arr[i].errors;
    });

    data.home_pitchers.forEach((el, i, arr) => {
      arr[i]._errors = el.errors;
      delete arr[i].errors;
    });

    data.home_pitchers.forEach((el, i, arr) => {
      arr[i]._save = el.save;
      delete arr[i].save;
    });
  }
};

module.exports = controller;
