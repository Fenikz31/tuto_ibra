const Express = require('express'),
      Mysql = require('mysql');

const app = Express()

app.get( '/', ( req, res ) => res.send( '<h1>Hello World from GET!</h1>' ))
app.delete( '/', ( req, res ) => res.send( '<h1>Hello World from DELETE!</h1>' ))
app.post( '/', ( req, res ) => res.send( '<h1>Hello World from POST!</h1>' ))
app.patch( '/', ( req, res ) => res.send( '<h1>Hello World from PATCH!</h1>' ))

app.listen(4000, () => console.log( `App running on port 4000` ))