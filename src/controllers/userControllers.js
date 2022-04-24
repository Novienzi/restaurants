const userModel = require('../sqlModel/userModel')

class UserController {
    static async AddBalance(req, res, next) {
        try {
            const {amount} = req.body 
            const userID = req.user.userID
            
            const user = await userModel.topUpBalance(amount, userID)
            if (user.rowCount == 1) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data :user.rowCount
                })
            }
        } catch (err) {
           next(err)
        }
    }


}

module.exports = UserController