var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession = require('cookie-session')

var db = require('./db/conn');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var bookRouter = require('./routes/book');

db.connect();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  secret: process.env.SECRET_KEY,
  maxAge: Number(process.env.MAX_AGE)
}))

app.use(async (req, res, next) => {
  if(req.session.user) console.log(`User ${req.session.user.username}`);
  next();
})
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/book', bookRouter);

module.exports = app;