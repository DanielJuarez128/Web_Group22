const { body, param } = require("express-validator");

const validators = {};

validators.ImgArtValidator = [
    param("id")
        .optional()
        .isMongoId().withMessage("ID is MongoID"),
    body("Art")
        .trim()
        .notEmpty().withMessage("User is required")
        .isMongoId().withMessage("ID is MongoID"),
    body("Img")
        .trim()
        .notEmpty().withMessage("Picture is required")
        .isString().withMessage("Picture is a string")
        .isURL().withMessage("Picture is a URL")
];

validators.ArticuleValidator = [
    body("Art")
        .trim()
        .notEmpty().withMessage("User is required")
        .isMongoId().withMessage("ID is MongoID")
];

validators.idInParams = [
    param("id")
        .notEmpty().withMessage("ID is required")
        .isMongoId().withMessage("ID is MongoID")
];

module.exports = validators;