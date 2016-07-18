var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contact= new Schema({
 	    name    : String,
 	    email    : String,
 	    mobileno  : Number
 	});

module.exports=mongoose.model('usercontact',contact)
