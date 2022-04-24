const db = require('../config/db')


const searchRestoByName = async function(param) {
    try {
        const rows  = await db.query(
        `SELECT r.id as resto_id, r."name" , m.id as dish_id, m.dish_name, m.price FROM restaurants r 
        JOIN menus m ON r.id = m.restaurant_id 
        WHERE LOWER(r.name) LIKE '%${param}%' or LOWER(m.dish_name) LIKE '%${param}%' ORDER BY r.name`
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};

const searchRestoByTime = async function(day, time) {
    try {
        const rows  = await db.query(
        `select * from restaurants r 
        join schedules s on r.id = s.restaurant_id 
        where s."day" = $1 and s.opening_hours <= $2
        and s.closing_hours >= $2`, [day, time]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};

const searchRestoByDishCount = async function(param, isMorethan) {
    try {
       if (isMorethan) {
        const rows  = await db.query(
            `SELECT r.id, r."name" , count(r.id) as menus
            FROM restaurants r 
                INNER JOIN menus m
                            ON r.id = m.restaurant_id 
            GROUP BY 
                 r.id, r."name"
            HAVING count(r.id) > $1;`, [param]
            );
        return rows; 
       } else {
        const rows  = await db.query(
            `SELECT r.id, r."name" , count(r.id) as menus
            FROM restaurants r 
                INNER JOIN menus m
                            ON r.id = m.restaurant_id 
            GROUP BY 
                 r.id, r."name"
            HAVING count(r.id) < $1;`, [param]
            );
        return rows;
       }
    } catch (error) {
        throw error;
    }
};

const getRestoMenu = async function(restoID, menuID) {
    try {
        const rows  = await db.query(
        `SELECT r.id as resto_id, r."name" , m.id as dish_id, m.dish_name, m.price FROM menus m
        JOIN restaurants r ON r.id = m.restaurant_id 
        WHERE r.id = $1 AND m.id = $2`, [restoID, menuID]
        );
        return rows.rows; 
    } catch (error) {
        throw error;
    }
};

module.exports ={
    searchRestoByName,
    searchRestoByTime,
    searchRestoByDishCount,
    getRestoMenu
}