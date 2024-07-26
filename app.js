const express = require('express');
const app = new express();
const routes = require('./routes');
const logger = require('morgan')

require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 4568;

app.use(express.json());
app.use(logger('dev'));
app.use('/',routes);

app.listen(PORT, ()=> {
    console.log("Server is running on port" + PORT);
});