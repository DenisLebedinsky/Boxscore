const NBA = require("../models/NBA").statsNBA;
const MLB = require("../models/MLB").statsMLB;

const controller = {};

controller.saveNBA = data => {
  var nba = new NBA(data);
  nba.save(err => {
    if (err) throw err;
    console.log("data NBA save in db");
  });
};

controller.saveUpdateMLB = data => {
  NBA.findAll((err, nba) => {
    if (err) throw err;
    if (nba) {
			nba.updateOne(nba.id, data);
			console.log("data MLB update");
    } else {
      var nba = new MLB(data);
      nba.save(err => {
        if (err) throw err;
        console.log("data MLB save");
      });
    }
  });
};

module.exports = controller;
