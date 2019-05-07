var schedule = require("node-schedule");
var axios = require("axios");
var controller = require('./controllers/dbController');

// shedule
schedule.scheduleJob("*/15 * * * * *", function() {
	
	// -------MLB---------
	axios
    .get(
      "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json"
    )
    .then(function(response) {
			controller.saveUpdateMLB(response);
    })
    .catch(function(error) {
			if(error) throw error
      console.log("error");
    });
});

module.exports = schedule;