
const joi = require("joi");
const { BadRequest} = require('../helper/error')

const validateDate = joi.object({
   datetime : joi.date().iso().required()
});

const validateCount = joi.object().keys({
    morethan: joi.number().min(0),
    lessthan: joi.number().min(0)
  }).or('morethan', 'lessthan');

const dateValidation = async (req, res, next) => {
try {
    const payload = {
        datetime : req.query.q,
	};
    const { error } = validateDate.validate(payload);
	if (error) {
	throw new BadRequest (error.message)
	} else {
		next();
	}
} catch (err){
    next(err)
}	
};

const countValidation = async (req, res, next) => {
    try {
        const payload = req.body
        const { error } = validateCount.validate(payload);
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
    dateValidation,
    countValidation
};