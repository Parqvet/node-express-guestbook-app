const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

// routes

module.exports = app;