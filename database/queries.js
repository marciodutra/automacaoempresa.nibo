const pool = require('./connection');


async function getActiveTestUser() {

    const query = `
        SELECT 
            email,
            password_encrypted
        FROM test_users
        WHERE active = true
        LIMIT 1;
    `;


    const result = await pool.query(query);


    return result.rows[0];

}


module.exports = {
    getActiveTestUser
};