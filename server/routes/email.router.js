const express = require("express");
const router = express.Router();
const runValidation = require("../validators/index.middleware");

const { emailValidator } = require("../validators/email.validator");
const emailController = require("../controllers/email.controller");

router.get("/email", emailValidator, runValidation, emailController.sendMail);

module.exports = router;