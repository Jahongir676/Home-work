import Joi from 'joi';

export const categoryValidation = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    tag: Joi.string().required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
};
