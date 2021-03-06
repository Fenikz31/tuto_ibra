const Express = require('express');
const Mysql = require('mysql'),
      dotenv = require('dotenv').config();

const Routes = require('./src/routes.js'),
      { Router } = Routes
const app = Express(),
      { MYSQL_PASSWORD, MYSQL_USER, PORT } = process.env

app.use( Express.urlencoded({ extended: true, limit: '100mb' }))
app.use( Express.json({ limit: '100mb' }))

const connection = Mysql.createConnection({
  host: 'localhost',
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: 3308
});

app.use( Router( connection ) )

app.listen( PORT, () => console.log( `App running on port ${ PORT }` ))