  // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');
    //var session =require('express-session');
    var router = express.Router();
   
    var login = ('./models/login.js');
    var usercontact = ('./models/usercontact.js');

     router.route('/register').post(function(req, res) {

    	var userlogin = new login({
          
          name : "ashish",
          email: "ashishvmkv",
          password:'qwerty',
          mobileno: 9876543211

    	});
    	
    	login.save(function(err,data){

    		if(err)
    			console.log(err);
    		console.log(data);
    	})
    	
   });

     module.exports =router;