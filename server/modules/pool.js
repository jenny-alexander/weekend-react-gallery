const pg = require('pg');

//get db connection requirements
const pool = new pg.Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
});

//export
module.exports = pool;