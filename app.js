  // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
  


    // configuration =================

    mongoose.connect('mongodb://localhost/testing', function(err,data)
    {
        if(err){
            console.log("kuch toh hai");
        }
            else
            {
                console.log("something is happing");
            }
        
    }

   );

    // listen (start app with node server.js) ======================================
    app.listen(5000);
    console.log("App listening on port 8080");