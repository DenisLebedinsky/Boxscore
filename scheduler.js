const schedule = require('node-schedule')
const controller = require('./controllers/controller')

schedule.scheduleJob('*/15 * * * * *', async function() {
    const league = ['NBA', 'MLB']

    const arr = league.map(typeLeague =>
        controller.fetchData(typeLeague).catch(function() {}),
    )

    const res = await Promise.all(arr)

    res.forEach(info => {
        if (info) {
            try {
                controller.updateGame(info.data)
            } catch (err) {
                console.error(err)
            }
        }
    })
})
