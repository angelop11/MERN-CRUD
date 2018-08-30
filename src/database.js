const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern-tasks'

mongoose.connect(URI)
	.then(db => console.log('connect db'))
	.catch(err => console.log(err))

module.exports = mongoose