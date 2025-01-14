import Joi from 'joi';

export const userAddressValidation = {
    userId: Joi.number().integer().required(),
    title: Joi.string().required(),
    addressLine1: Joi.string().required(),
    addressLine2: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    postalCode: Joi.string().required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
};
