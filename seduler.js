const schedule = require('node-schedule')
const getData = require('./controllers/getData')
var controller = require('./controllers/dbController')

// shedule
schedule.scheduleJob('*/15 * * * * *', async function() {
    const nba = await getData.NBA()
    controller.saveUpdateNBA(nba.data)

    const mlb = await getData.MLB()
    controller.saveUpdateMLB(mlb.data)
})

module.exports = schedule
