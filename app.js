var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var sessions = require("express-session");
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var hbs = require('hbs');
var md = require('./lib/markdown');
const credentials = require('./credentials');
var index = require('./routes/index');
var projects = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('md', md({
  path: '/public/markdown',
  ext: '.md'
}));

hbs.registerPartials(__dirname + '/views/partials');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());
app.use(cookieParser(credentials.cookieSecret));
app.use(sessions({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.use('/', index);
app.use('/projects', projects);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;