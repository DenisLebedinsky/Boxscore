const schedule = require('node-schedule')
const getData = require('./controllers/getData')
var controller = require('./controllers/dbController')

// shedule
schedule.scheduleJob('*/15 * * * * *', async function() {
		const league = ['NBA', 'MLB'];
		
		const arr = league.map(typeLeague => getData(typeLeague))

		const res = await Promise.all(arr)
		
		res.forEach(info => controller.saveUpdateGame(info.data))
		
})

module.exports = schedule
