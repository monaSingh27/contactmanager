    var express  = require('express');
    var app      = express();                              
    var mongoose = require('mongoose');   
    var routes = require('./Routes/routes');
    var bodyparser = require('body-parser');

    mongoose.connect('mongodb://localhost/contactmanager',function(err,data){
        if(err){
            console.log('database connection error'+err); }
            else {
                console.log('database connection successful'); }
       });

     app.use(bodyparser.json());
     app.use(bodyparser.urlencoded({ extended: true }));

     app.use(routes);

    app.listen(8080);
    console.log("App listening on port 8080");