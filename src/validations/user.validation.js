import Joi from 'joi';

export const userDetailValidation = {
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user', 'admin').default('user'),
    avatar: Joi.string().uri(),
    username: Joi.string().required(),
    birthOfDate: Joi.date(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
    isActive: Joi.boolean().default(false),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
};
