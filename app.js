const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Sequelize = require('sequelize');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const originRouter = require('./routes/origin');
const usulanRouter = require('./routes/usulan');
const downloadRouter = require('./routes/lib/download');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/origin', originRouter);
app.use('/usulan', usulanRouter);
app.use('/lib/download', downloadRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql',
  // operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync({
      force: true,
    });
    // eslint-disable-next-line no-console
    console.log(`CONNECTION HAS BEEN ESTABLISHED SUCCESSFULLY ON PORT ${process.env.PORT}`);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });
// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
