   var express  = require('express');
    var app      = express();                               
    var mongoose = require('mongoose');
    var router = express.Router();
    var login = require('../models/login');
    var contact = require('../models/usercontact');

//register routes
     router.route('/register')
     .post(function(req, res) {
     	
            var usercontact = new contact({
             name:req.body.name,
              email:req.body.email,
                mobile:req.body.mobile    });

            usercontact.save(function(err,data){
                if(err) {
                    console.log(err);
                    res.json(err);   }
                else {
                console.log(data); }
            });  

            	var userlogin = new login({
                    email:req.body.email,
                 password:req.body.password
                });

            	userlogin.save(function(err,data){
            		if(err) {
            			console.log(err);
            			res.json(err);   }
            		else {
            		console.log(data);   }
            	}); 
            	
            res.json("done");
   });






     module.exports =router;