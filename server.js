const express = require('express');
const app  = express();
const PORT = 3000
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './.env') });

// Establize database connection 
const db = require('./config/db');

//  use bodyparser to parse the form data
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Establize initial routes
app.use('/' , require('./routes/index'));

app.listen(process.env.PORT || PORT, function(err) {
     if(err) {
         console.error(err);
         return;
     }
     console.log('listening on port' , process.env.PORT || PORT);
});