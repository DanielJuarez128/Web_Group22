const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router")
const articuleRouter = require("./articule.router")
const imgRouter = require("./imagen.router")
const etiquetaRouter = require("./etiqueta.router")
const compraRouter = require("./compra.router")
const emailRouter = require("./email.router")

router.use("/auth", authRouter);
router.use("/articule", articuleRouter);
router.use("/imagen", imgRouter);
router.use("/etiqueta", etiquetaRouter);
router.use("/compras", compraRouter);
router.use("/email", emailRouter);

module.exports = router;