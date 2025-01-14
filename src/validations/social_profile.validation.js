import Joi from 'joi';

export const userPlatformValidation = {
    userId: Joi.number().integer().required(),
    platform: Joi.string().required(),
    platformUser: Joi.string().required()
};
