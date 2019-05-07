const express = require("express");
const router = express.Router();
const StatsNBA = require("../models/nba").StatsNBA;
const StatsMLB = require("../models/mlb").StatsMLB;
const getData = require("../controllers/getData");

router.get('/nba', function(req, res, next) {
	StatsNBA.find({}, async function(err, dataArr){
		if(err) throw err;
		const data = dataArr[0];
		if ((new Date() -  data.updated_at)/1000 > 15){
			const nba = await getData.NBA();
			controller.saveUpdateNBA(nba.data);
			//res.send
		} else {
			//send data
		}
	})
});

router.get("/nba", function(req, res, next) {
	StatsMLB.find({}, async function(err, dataArr) {
    if (err) throw err;
    const data = dataArr[0];
    if ((new Date() - data.updated_at) / 1000 > 15) {
      const mlb = await getData.MLB();
      controller.saveUpdateMLB(mlb.data);
      //res.send
    } else {
      //send data
    }
  });
});

module.exports = router;
