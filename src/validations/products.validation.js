import Joi from 'joi';
export const productValidation = {
    categoryId: Joi.number().integer().required(),
    title: Joi.string().required(),
    picture: Joi.string().uri().required(),
    summary: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    discountType: Joi.string().valid('percentage', 'fixed').required(),
    discountValue: Joi.number().required(),
    tags: Joi.array().items(Joi.number().integer()).required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
};
