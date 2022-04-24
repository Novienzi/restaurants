const db = require('../config/db')



const insertUser = async function(fullname, username, hashPassword) {
    try {
        const rows  = await db.query(
          'INSERT INTO users (fullname, username, password) VALUES ($1, $2, $3) RETURNING fullname, username',
           [fullname, username, hashPassword]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};

const getUser = async function(username) {
    try {
        const rows  = await db.query(
          'SELECT * FROM users WHERE username = $1', [username]
        );
        return rows; 
    } catch (error) {
        throw new Error(error.details);
    }
};


module.exports ={
    insertUser, getUser
}
    
