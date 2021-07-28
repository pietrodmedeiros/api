const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb:http://localhost:5000/api')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}