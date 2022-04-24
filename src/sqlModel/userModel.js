const db = require('../config/db')


const getUserByID = async function(userID) {
    try {
        const rows  = await db.query(
          'SELECT * FROM users WHERE id = $1', [userID]
        );
        return rows.rows; 
    } catch (error) {
        throw new Error(error.details);
    }
};

const topUpBalance = async function(amount, userID) {
    try {
        const rows  = await db.query(
          'UPDATE users SET balance = balance + $1 WHERE id = $2 ', [amount,userID]
        );
        return rows; 
    } catch (error) {
        throw new Error(error.details);
    }
};


module.exports ={
    getUserByID, topUpBalance
}
    
