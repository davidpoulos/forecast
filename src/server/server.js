/**
 * CORE EXPRESS SERVER CONFIGURATION + MODULE
 */

const express = require('express');
const app = express();

const userRoute = require('../routes/user');


app.use('/', userRoute);


module.exports = app;