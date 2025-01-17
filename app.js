const createError = require('http-errors');
const compression = require('compression');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const index = require('./routes/index');
const tripleDes = require('./routes/3des');
const aes = require('./routes/aes');
const blowfish = require('./routes/blowfish');
const rsa = require('./routes/rsa');
const twofish = require('./routes/twofish');
const bacon = require('./routes/bacon');

const app = express();

// Compress all HTTP responses
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/3des', tripleDes);
app.use('/aes', aes);
app.use('/blowfish', blowfish);
app.use('/rsa', rsa);
app.use('/twofish', twofish);
app.use('/bacon', bacon);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
