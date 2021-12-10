import 'dotenv/config';
import 'regenerator-runtime';
import Express from'express';
import Mysql from 'mysql';

import Router from './src/routes.js'

const app = Express(),
      { MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER, PORT } = process.env

app.use( Express.urlencoded({ extended: true, limit: '100mb' }))
app.use( Express.json({ limit: '100mb' }))

const connection = Mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: 3306
});

app.use( Router( Express, connection ) )

app.listen( PORT, () => console.log( `App running on port ${ PORT }` ))