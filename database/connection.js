const { Pool } = require('pg');


const pool = new Pool({

    user: 'postgres',
    host: 'localhost',
    database: 'automacao_nibo_test',
    password: 'Md@051080',
    port: 5432,

});


module.exports = pool;