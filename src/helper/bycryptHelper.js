const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUND;

function hash(password) {
    return new Promise((resolve, reject) => {
        
        bcrypt.hash(password, parseInt(saltRounds), function (err, hash) {
            if (err)
                reject(err)
            else
                resolve(hash)
        });
    })
}

function checkPassword(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (err, result) {
            if (err)
                reject(err)
            else
                resolve(result)
        })
    });
}

const bcryptFunctions = {
    hash,
    checkPassword
}
module.exports = bcryptFunctions