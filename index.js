const Express = require('express'),
      Mysql = require('mysql'),
      dotenv = require('dotenv').config();

const app = Express(),
      { MYSQL_PASSWORD, MYSQL_USER, PORT } = process.env

const connection = Mysql.createConnection({
  host: 'localhost',
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  port: 3308
});

connection.connect( (err) => {
  if ( err ) {
    return console.log( 'err: ', err);
  }

  console.log( 'connected');
});


app.get( '/', ( req, res ) => res.send( '<h1>Hello World from GET!</h1>' ))
app.delete( '/', ( req, res ) => res.send( '<h1>Hello World from DELETE!</h1>' ))
app.post( '/', ( req, res ) => res.send( '<h1>Hello World from POST!</h1>' ))
app.patch( '/', ( req, res ) => res.send( '<h1>Hello World from PATCH!</h1>' ))

app.listen( PORT, () => console.log( `App running on port ${ PORT }` ))