const StatsNBA = require("../models/nba").StatsNBA;
const StatsMLB = require("../models/mlb").StatsMLB;
const controller = {};

controller.saveUpdateNBA = data => {
  data.id = Math.floor(Math.random() * 100000000);
  data.updated_at = new Date();

  StatsNBA.find({}, (err, docs) => {
    if (err) throw err;
    if (docs.length > 0) {
      var doc = docs[0];
      doc.updateOne(data, err => {
        if (err) throw err;
      });
    } else {
      var mlb = new StatsNBA(data);
      mlb.save(data, err => {
        if (err) throw err;
				console.log("data NBA save");
      });
    }
  });
};

controller.saveUpdateMLB = data => {
  preparation(data);

  StatsMLB.find({}, (err, docs) => {
    if (err) throw err;
    if (docs.length > 0) {
      var doc = docs[0];
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
