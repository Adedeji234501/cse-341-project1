const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/database');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
  
app.use('/',require('./routes')); // Use the routes
mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port,() => {
          console.log(`Connected to Database and listening on ${port}`);
        });
    }
});