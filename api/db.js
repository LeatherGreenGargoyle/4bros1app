let mongoose = require('mongoose')

let uri = 'mongodb://parkDavid:1234@ds133348.mlab.com:33348/4bros1app'

mongoose.connect(uri)

let mlab = mongoose.connection

mlab.once('open', () => {
    console.log('connected to mlab mongoDb')
})

module.exports = mlab
