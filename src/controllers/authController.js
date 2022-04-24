const authModel = require('../sqlModel/authModel')
const { hash, checkPassword } = require('../helper/bycryptHelper');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET;
const { NotFound, UnAuthorized} = require('../helper/error')

class AuthController {
    static async register(req, res, next) {
        try {
            const {fullname, username, password } = req.body;
            const hashPassword = await hash(password).catch(err => {
                throw err
            })
            const user = await authModel.insertUser(fullname, username, hashPassword)
            if (user.rowCount == 1) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data : user.rows
                })
            } 
        } catch (err) {
            next(err)
        }
    } 

    static async login(req, res, next) {
        try {
            const body = req.body
            const getUser = await authModel.getUser(body.username)
            let data = getUser.rows
            if (data.length == 0) {
                throw new NotFound('there is no user data')
            } else {
                const isPassMatch = await checkPassword(body.password, data[0].password)
                if (!isPassMatch) {
                    throw new UnAuthorized('wrong password')
                } else {
                    const token = jwt.sign({ userID: data[0].id }, secret, { 
                        expiresIn: process.env.JWT_EXPIRED
                    });
                    delete data[0].password
                    data[0].token = token
                    res.status(200).send({
                        status: true,
                        message :'success!',
                        data : data[0]
                    })
                }
            }
        } catch (err) {
            next(err)
        }
    }

}


module.exports = AuthController;