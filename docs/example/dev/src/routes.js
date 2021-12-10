export default function Router ( app, connection ) {
  const router = app.Router()

  // router.delete()

  router.get('/table/:name', ( req, res ) => {
    const { name } = req.params

    if ( typeof name !== 'string' )
      return res.status( 400 ).json({ reason: 'Name must be a string.' })

    connection.query(`SELECT * FROM \`TUTO\`.\`${ name }\``, ( err, results, fields) => {
      if ( err ) {
        console.log( 'err:', err )
        return res.status( 500 ).json({ reason: err })
      }

      return res.json({ results })
    })
  })

  // router.patch()

  router.post('/create-table', ( req, res ) => {
    if ( !req.body ) {
      return res.status( 400 ).json({ reason: 'Body empty.' })
    }
    const {
      fields,
      table
    } = req.body

    if ( !fields || !table ) {
      return res.status( 400 ).json({ reason: 'Fields or table name missing.' })
    }

    if ( Array.isArray( fields) && typeof table === 'string') {
      const query_fields= fields.map( (field) => `${ field } TEXT`).join(', ')

      return connection.query(
        `CREATE TABLE \`TUTO\`.\`${ table }\`(id INT NOT NULL AUTO_INCREMENT,
        ${ query_fields },
        created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY id_UNIQUE (id)
      )`, ( err, results, fields) => {
        if ( err ) {
          console.log( 'err:', err.message, err.code )
          return res.status( 500 ).json({ reason: err })
        }
        return res.status( 201 ).json({ results })
      })
    }

    return res.status( 400 ).json({ reason: 'Wrong format. Fields is an array and table is a string.' })
  })

  return router
};

