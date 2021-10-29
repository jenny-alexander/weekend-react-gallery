const express = require('express');
const router = express.Router();

// DB Connection
const pool = require( '../modules/pool.js' );

// GET Route
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM items ORDER BY id;`;

    pool.query( queryString ).then( ( results ) => {
        res.send( results.rows );
    } ).catch( (err ) =>{
        console.log( `GET error is:`, error );
        res.sendStatus( 500 );
    })

}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    const queryString = `UPDATE items SET likes = ${req.body.likes}
                         WHERE id = ${req.params.id}`;
    pool.query( queryString ).then( (results )=>{
        res.sendStatus( 200 );  
    }).catch( (error )=>{
        console.log( `PUT error is:`, error );
        res.sendStatus( 500 );
    })
}); // END PUT Route

//DELETE Route
router.delete( '/delete/:id', ( req, res )=>{
    const queryString = `DELETE FROM items WHERE id='${req.params.id}';`;
    pool.query( queryString ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( error )=>{
        console.log( error );
        res.sendStatus( 500 );
    })
}) // END DELETE Route

module.exports = router;