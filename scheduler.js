const schedule = require('node-schedule')
const getData = require('./controllers/getData')
const dbController = require('./controllers/dbController')

schedule.scheduleJob('*/15 * * * * *', async function() {
    const league = ['NBA', 'MLB']

    const arr = league.map(typeLeague =>
        getData(typeLeague).catch(function() {}),
    )

    const res = await Promise.all(arr)

    res.forEach(info => {
        if (info) {
            try {
                dbController.saveUpdateGame(info.data)
            } catch (err) {
                console.error(err)
            }
        }
    })
})
