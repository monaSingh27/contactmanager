  // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');

    //var session =require('express-session');
    var router = express.Router();
   
    var ulogin = require('../models/login');
    //var usercontact = require('../models/usercontact');

     router.route('/register')
     .post(function(req, res) {

    	var userlogin = new ulogin();
    	userlogin.name =req.body.name;
    	userlogin.email= req.body.email;
    	userlogin.mobileno =req.body.mobileno;
    	userlogin.password= req.body.password;

    	// var contactDetails = new usercontact();
    	// userlogin.name =req.body.name;
    	// userlogin.email= req.body.email;
	    // userlogin.mobileno =req.body.mobileno;
    	


    	userlogin.save(function(err,data){

    		if(err)
    		{
    			console.log(err);
    			res.json(err);
    		}
    		else
    		{
    		console.log(data);
    		res.json(data);
    	     }


    	})
    	
   });

     module.exports =router;