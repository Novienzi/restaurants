const restoModel = require('../sqlModel/restaurantModel')
const { NotFound} = require('../helper/error')

class RestoController {
    static async searchRestoByName(req, res, next) {
        try {
            const  name  = req.query.q;
            const listResto = await restoModel.searchRestoByName(name.toLowerCase())
            if (listResto.rowCount >= 1) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data : listResto.rows
                })
            } else {
                throw new NotFound('there is no data')
            }

        } catch (err) {
            next(err)
        }
    } 

    static async searchRestoByTime(req, res, next) {
        try {
            const  datetime  = new Date(req.query.q);
            const day = datetime.toDateString().split(' ')[0]
            const time = datetime.toUTCString().split(' ')[4]
            const listResto = await restoModel.searchRestoByTime(day, time)
            if (listResto.rowCount >= 1) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data : listResto.rows
                })
            } else {
                throw new NotFound('there is no data')
            }
        } catch (err) {
            next(err)
        }
    } 

    static async searchRestoByDishCount(req, res, next) {
        try {
            const  {morethan, lessthan} = req.body
            let param;
            let isMoreThan;

            if (morethan > 0) {
                param = morethan
                isMoreThan = true
            } else if (lessthan > 0) {
                param = lessthan
                isMoreThan = false
            }
            const listResto = await restoModel.searchRestoByDishCount(param, isMoreThan)
            if (listResto.rowCount >= 1) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data : listResto.rows
                })
            } else {
                throw new NotFound('there is no data')
            }
        } catch (err) {
            next(err)
        }
    } 

    static async getRestoMenuList(req, res, next) {
        try {
            const  restoID  = req.params.restoID;
            const listResto = await restoModel.getRestoMenuList(parseInt(restoID))
            if (listResto.length >= 1) {
                res.status(200).send({
                    status: true,
                    message :'Success!',
                    data : listResto
                })
            } else {
                throw new NotFound('there is no data')
            }

        } catch (err) {
            next(err)
        }
    } 

}


module.exports = RestoController;