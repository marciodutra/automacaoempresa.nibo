const pool = require('./connection');


async function getActiveTestUser() {

    const query = `
        SELECT 
            id,
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
        )
        RETURNING id;
    `;


    const result = await pool.query(query, [
        name,
        email,
        encryptedPassword
    ]);


    return result.rows[0];

}



async function createTestCompany(
    userId,
    cnpj,
    companyName
) {

    const query = `
        INSERT INTO test_companies
        (
            user_id,
            cnpj,
            company_name,
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
        userId,
        cnpj,
        companyName
    ]);

}



module.exports = {
    getActiveTestUser,
    createTestUser,
    createTestCompany
};