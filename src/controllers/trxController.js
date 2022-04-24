const trxModel = require('../sqlModel/trxModel')
const userModel = require('../sqlModel/userModel')
const restoModel = require('../sqlModel/restaurantModel')
const {NotFound,  BadRequest} = require('../helper/error')

class TrxController {
    static async AddTrx(req, res, next) {
        try {
            const {restoID} = req.params
            const qty = req.body.qty
            const menuID =  req.body.menu_id
            const userID = req.user.userID

            const dataMenu = await restoModel.getRestoMenu(restoID, menuID)
            if (dataMenu.length == 0) throw new NotFound("there is no menu in this resto")
            const user = await userModel.getUserByID(userID)
            const totalAmount = dataMenu[0].price * qty

            if (totalAmount > user[0].balance) {
                throw new BadRequest('insuficient balance')
            }
            
            const trx = await trxModel.insertTrx(userID, menuID, qty, totalAmount, restoID)
            if (trx != 0) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data :trx
                })
            }
        } catch (err) {
           next(err)
        }
    }


}

module.exports = TrxController