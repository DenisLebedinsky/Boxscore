const eventEmmiter = require('../eventEmmitter')
module.exports = {
    createIo: server => {
        const io = require('socket.io')(server)
        io.on('connection', function(socket) {
            eventEmmiter.on('notify', data => {
                socket.emit('updateData', data)
            })
        })
    },
}
