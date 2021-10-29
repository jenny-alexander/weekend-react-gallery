const express = require('express');
const router = express.Router();

// DB Connection
const pool = require( '../modules/pool.js' );

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM items;`;

    pool.query( queryString ).then( ( results ) => {
        res.send( results.rows );
    } ).catch( (err ) =>{
        console.log( `GET error is:`, error );
        res.sendStatus( 500 );
    })

}); // END GET Route

module.exports = router;