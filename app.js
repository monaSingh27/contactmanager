  // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');   
    var routes = require('./Routes/routes');
                  // mongoose for mongodb
    var bodyparser = require('body-parser');

    // configuration =================

    mongoose.connect('mongodb://localhost/contactmanager',function(err,data)
    {
        if(err){
            console.log("Error");
        }
            else
            {
                console.log("something is happing");
            }
        
    }

   );

     app.use(bodyparser.json());
     app.use(bodyparser.urlencoded({ extended: true }));

   
     app.use('/api', routes);

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");