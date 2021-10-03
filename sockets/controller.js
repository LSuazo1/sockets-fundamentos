const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (paylod, callback) => {

        const id = 1234;
        callback({ id, fecha: new Date().getTime() });
        socket.broadcast.emit('enviar-mensaje', paylod);

    });

}

module.exports = {
    socketController
}