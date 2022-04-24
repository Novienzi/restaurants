
const joi = require("joi");
const { BadRequest} = require('../helper/error')

const validateInputTrx = joi.object({
   qty: joi.number().greater(0).required(),
   menuID: joi.number().greater(0).required()
});


const trxValidation = async (req, res, next) => {
try {
    const payload = {
        qty : req.body.qty,
        menuID : req.body.menu_id
    }
    
    const { error } = validateInputTrx.validate(payload);
	if (error) {
	throw new BadRequest (error.message)
	} else {
		next();
	}
} catch (err){
    next(err)
}	
};


module.exports = {
    trxValidation
};