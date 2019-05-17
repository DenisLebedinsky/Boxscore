require('dotenv').config()
const expect = require('chai').expect
const controller = require('../controllers/controller')
const mongoose = require('mongoose')
const data = require('./mockData')

mongoose.connect(process.env.MONGODB_URI_TEST, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

describe('controller', function() {
    it('save/update game', async () => {
        await controller.updateGame(data)
    })

    it('fetch game from db', async () => {
        let res
        const response = {
            send: data => {
                res = data
            },
        }
        const emtyFunc = () => {}

        await controller.checkFeed(data.league, response, emtyFunc)

        expect(res.league).equal(data.league)
    })

    it('fetch data from api', async () => {
        const fetchData = await controller.fetchData(data.league)
        expect(fetchData.data.league).equal(data.league)
    })
})
