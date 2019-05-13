const eventEmmiter = require('../eventEmmitter')
module.exports = {
    createIo: server => {
        const io = require('socket.io')(server)
        io.on('connection', function(socket) {
            eventEmmiter.on('notify', data => {
                data.forEach(el => {
                    console.log(el.league)
                    socket.emit('update_data_' + el.league, el)
                })
            })
        })
    },
}
