const pool = require('./connection');


async function getActiveTestUser() {

    const query = `
        SELECT 
            email,
            password_encrypted
        FROM test_users
        WHERE active = true
        ORDER BY id DESC
        LIMIT 1;
    `;


    const result = await pool.query(query);


    return result.rows[0];

}


async function createTestUser(
    name,
    email,
    encryptedPassword
) {

    const query = `
        INSERT INTO test_users
        (
            name,
            email,
            password_encrypted,
            active
        )
        VALUES
        (
            $1,
            $2,
            $3,
            true
        );
    `;


    await pool.query(query, [
        name,
        email,
        encryptedPassword
    ]);

}


module.exports = {
    getActiveTestUser,
    createTestUser
};