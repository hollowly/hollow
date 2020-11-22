var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itcast')

var Schema = mongoose.Schema

var studentSchema = new Schema({
	name: {
		type:String,
		required:true
	},
	class: {
		type:String,
		required:true
	},
	age: {
		type:Number,
		required:true
	},
	hobbys: {
		type:String
	}
})


module.exports = mongoose.model('Student',studentSchema)