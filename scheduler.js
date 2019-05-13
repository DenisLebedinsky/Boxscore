const schedule = require('node-schedule')
const controller = require('./controllers/controller')
const eventEmmiter = require('./eventEmmitter')

schedule.scheduleJob('*/15 * * * * *', async function() {
    const league = ['NBA', 'MLB']

    const arr = league.map(typeLeague =>
        controller.fetchData(typeLeague).catch(function() {}),
    )

    const res = await Promise.all(arr)

		const resData = res.map(el => el.data)

    resData.forEach(info => {
        if (info) {
            try {
                controller.updateGame(info)
            } catch (err) {
                console.error(err)
            }
        }
    })
		
		eventEmmiter.emit('notify', resData)
})
