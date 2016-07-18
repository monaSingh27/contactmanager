var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema= new Schema({
 	    name    : String,
 	    email    : String,
 	    mobileno  : Number,
 	    password: String
 	  //  time: {
 	  //   type : Date,
 	  //   default : Date.now
 	  // }

 	});

module.exports=mongoose.model('login',loginSchema)