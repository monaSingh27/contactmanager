  // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');
    var session =require('express-session');
    var bodyparser = require('body-parser');
    var login = ('./models/login.js');
    var usercontact = ('./models/usercontact.js')