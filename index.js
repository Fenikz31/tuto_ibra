const Express = require('express'),
      Mysql = require('mysql');

const app = Express()

app.get( '/', ( req, res ) => res.send( '<h1>Hello World!</h1>' ))

app.listen(4000, () => console.log( `App running on port 4000` ))