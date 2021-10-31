const mongoose = require('mongoose')

const helloWorld = new mongoose.Schema({
	ID:{
		type:Int,
		required: true
	},
	Info:{
		type:String,
		required: true
	}
})

module.exports = mongoose.model('helloWorld', helloWorld)