
const joi = require("joi");
const { BadRequest} = require('../helper/error')

const validation = joi.object({
    fullname: joi.string().min(3).max(25).required(),
    username: joi.string().alphanum().min(3).max(25).trim(true).required(),
    password: joi.string().min(8).trim(true).required(),
});

const inputValidation = joi.object({
    username: joi.string().alphanum().min(3).max(25).trim(true).required(),
    password: joi.string().min(8).trim(true).required(),
});

const topUpValidation = joi.object({
    amount: joi.number().integer().greater(0).required(),
});


const userValidation = async (req, res, next) => {
try {
    const payload = {
        fullname : req.body.fullname,
		username: req.body.username,
		password: req.body.password,
	};
    const { error } = validation.validate(payload);
	if (error) {
	throw new BadRequest (error.message)
	} else {
		next();
	}
} catch (err){
    next(err)
}	
};

const loginValidation = async (req, res, next) => {
    try {
        const payload = {
            username: req.body.username,
            password: req.body.password,
        };
        const { error } = inputValidation.validate(payload);
        if (error) {
        throw new BadRequest (error.message)
        } else {
            next();
        }
    } catch (err){
        next(err)
    }	
};

const validateTopUp = async (req, res, next) => {
    try {
        const payload = req.body
        const { error } = topUpValidation.validate(payload);
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
    userValidation,
    loginValidation,
    validateTopUp
};