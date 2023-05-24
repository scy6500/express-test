const Joi = require("joi");

const addBody = Joi.object().keys({
  first_num: Joi.number().required(),
  second_num: Joi.number().required(),
});

const subtractBody = Joi.object().keys({
  first_num: Joi.number().required(),
  second_num: Joi.number().required(),
});

const divideBody = Joi.object().keys({
  first_num: Joi.number().required(),
  second_num: Joi.number().not(0).required(),
});

const multiplyBody = Joi.object().keys({
  first_num: Joi.number().required(),
  second_num: Joi.number().required(),
});

module.exports = { addBody, subtractBody, divideBody, multiplyBody };
