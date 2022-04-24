const db = require('../config/db')



const insertTrx = async function(userID, dishID, qty, totalAmount, restoID) {
    const now = new Date()
    try {
        await db.query('BEGIN')
        const queryInsert = 'INSERT INTO purchase_histories (user_id, menu_id, qty, amount) VALUES ($1, $2, $3, $4) RETURNING id, amount'
        const res = await db.query(queryInsert ,[userID, dishID, qty, totalAmount])
        const queryUpdateResto = 'UPDATE restaurants SET balance = balance + $1, updated_at = $2 where id = $3'
        const queryUpdateRestoValue = [res.rows[0].amount, now, restoID]
        await db.query(queryUpdateResto, queryUpdateRestoValue)
        const queryUpdateUser = 'UPDATE users SET balance = balance - $1, updated_at = $2 where id = $3'
        const queryUpdateUserValue = [res.rows[0].amount, now, userID]
        await db.query(queryUpdateUser, queryUpdateUserValue)
        await db.query('COMMIT')
        return res.rows[0].id
      } catch (e) {
        await db.query('ROLLBACK')
        throw e
      }
}


module.exports ={
    insertTrx
}