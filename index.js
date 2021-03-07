if (process.env.NODE_ENV === undefined) {
    require('dotenv').config();
}

const express = require('express');
const routes = require('./app/routes');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(process.env.APP_PORT || 8081, function() {
    console.log("App listening on port " + (process.env.APP_PORT || 8081) +  " !");
});